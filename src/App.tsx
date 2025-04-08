import UserAge, { UserName as UN, UserLastName as ULN} from "./UserName";

const App = () => {
  return (
    <div>
      <p>Meu primeiro componente</p>
      <UN/>
      <ULN/>
      <UserAge/>
    </div>
  )
}

export default App;