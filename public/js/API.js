
const API = {
  getLastWorkout: ()=> $.ajax({
    method: 'GET',
    url: '/api/workouts'
  }).then(data=> data.length ? data.slice(-1)[0] : API.createWorkout()),
  createWorkout: ()=> $.ajax({
    method: "POST",
    url: '/api/workouts',
    data: {}
  }).then(data=> data),
  addExercise: (data,id)=> $.ajax({
    method: "PUT",
    url: "/api/workouts/"+id,
    data
  }).then(data=>data)
}