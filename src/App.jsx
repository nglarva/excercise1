const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.excercise}</p>
    </>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.name1} excercise={props.excercise1} />
      <Part part={props.name2} excercise={props.excercise2} />
      <Part part={props.name3} excercise={props.excercise3} />
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of excercise is {props.total}</p>
    </div>
  )
}


const App =  () => {
    const course = "Half Stack application development"
    const parts = ["Fundamentals of React", "Using props to pass data", "State of a component"]
    const excercises = [10,7,14]
    
    return (
      <div>
        <Header course={course}/>
        <Content name1= {parts[0]} excercise1={excercises[0]} name2= {parts[1]} excercise2={excercises[1]} name3={parts[2]} excercise3= {excercises[2]}/>
        <Total total = {excercises[0] + excercises[1] + excercises[2]}/>
      </div>
    )
}

export default App