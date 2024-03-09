import Button from "./components/Button/Button";

interface Props {
  className: string
}

function App({className}: Props) {
  
  return (
    <>
      <p className={className}>hola</p>
      <div className="pl-10 flex gap-4 items-center font-black">
        <Button size="sm" borderSize="sm" shadow='hover' shadowSize="sm" color="warning">
          Small
        </Button>
        <Button size="md" radius="md" shadow='default' shadowSize="md" color="danger">
          Medium
        </Button>
        <Button size="lg" radius="sm" shadow="default" shadowSize="md" borderSize="lg" color="success">
          Large
        </Button>
      </div>
    </>
  )
}

export default App;
