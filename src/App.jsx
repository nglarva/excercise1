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
    const part1 = {
      name:'Fundamentals of React',
      excercises: 10
    }
    const part2 = {
      name: "Using props to pass data",
      excercises: 7
    }
    const part3 = {
      name: "State of a component",
      excercises: 14
    }
    
    
    return (
      <div>
        <Header course={course}/>
        <Content name1= {part1.name} excercise1={part1.excercises} name2= {part2.name} excercise2={part2.excercises} name3={part3.name} excercise3= {part3.excercises}/>
        <Total total = {part1.excercises + part2.excercises + part3.excercises}/>
      </div>
    )
}

export default App