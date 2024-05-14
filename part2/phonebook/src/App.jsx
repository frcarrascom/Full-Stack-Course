import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './Components/Filter'
import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'
import Notification from './Components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    const allPeople = persons.map((p => p.name))

    if (allPeople.includes(newName)) {

      const msg = `${personObject.name} is already added to the phonebook, replace the old number with a new one?`

      const existingPerson = persons.find(p => p.name == personObject.name)

      if (window.confirm(msg)) {

        personService
          .update(existingPerson.id, personObject)
          .then((updatePerson) => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : updatePerson))
            setNewName("")
            setNewNumber("")
            showMessage(`${personObject.name}'s Phone was altered`, true)
          })
          .catch(error => {
            showMessage(`Phone ${personObject.number} could not be altered`, false)
          })
      }
    }
    else {

      setPersons(persons.concat(personObject))

      const msg = ` Do you want to add ${personObject.name}?`

      if (window.confirm(msg)) {
        personService
          .create(personObject)
          .then(response => {
            setPersons(persons.concat(response))
            setNewName("")
            setNewNumber("")
            showMessage(`${personObject.name} added`, true)
          })
          .catch(error => {
            showMessage(`${personObject.name} could not be added`, false)
          })
      }
    }
  }

  const deleteEntry = person => {

    const msg = `Delete ${person.name} ?`

    if (window.confirm(msg)) {
      personService
        .destroy(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id != person.id))
          showMessage(`${person.name} has been removed from the phone book`, true)
        })
        .catch(error => {
          showMessage(`Person ${person.name} could not be deleted`, false)
          personService
            .create(person)
            .then(response => {
              setPersons(persons.concat(response))
            })
            .catch(error => {
              showMessage(`error`, false)
            })
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }

  const showPersons = (newSearch) === '' ? persons
    : persons.filter(person =>
      person.name.toLowerCase().includes(newSearch.toLowerCase()))


  const showMessage = (notificationMessage, type) => {
    setNotificationMessage(notificationMessage)
    setMessageType(type)

    setTimeout(() => {
      setNotificationMessage(null)
    }, 3000)

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} messageType={messageType} />

      <Filter newSearch={newSearch} handleSearch={handleSearch} />

      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h3>Numbers</h3>
      <Persons showPersons={showPersons} deleteEntry={deleteEntry} />
    </div>
  )
}

export default App