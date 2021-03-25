import Dexie from 'dexie'

const datastore = new Dexie('TodoList')
datastore.version(2).stores(
  {todos: '++id,todoText,status'}
)

export default datastore
