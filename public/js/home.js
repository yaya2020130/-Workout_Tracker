$(document).ready(async ()=>{
  const lastWorkout = await API.getLastWorkout();
  console.log(lastWorkout);
  lastWorkout.exercises.map(a=>{
    $('#exercises').append(`<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${a.type}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Weight - ${a.weight}</li>
      <li class="list-group-item">Sets - ${a.sets}</li>
      <li class="list-group-item">Duration - ${a.duration}</li>
    </ul>
  </div>`)
  })

  $("#exampleModal").toggle()
})