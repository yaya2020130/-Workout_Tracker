$(document).ready(async ()=>{
  const lastWorkout = await API.getLastWorkout();
  console.log(lastWorkout);
  !lastWorkout.exercises.length ? $("#workoutBtn").text('Start Your Workout') : ''
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

  $("#newWorkout").on("click", ()=> API.createWorkout().then(()=>window.location.reload()))

  $('#selectType').on('change', function(){
    let type = $(this).val();
    if(type === "Cardio"){
      $("#cardio").show();
      $("#resistance").hide();
    }else{
      $("#cardio").hide();
      $("#resistance").show();
    }
  })

  $("#submitExercise").on("click", function(){
    let type = $("#selectType").val();
    let exercise = {};
    if(type === "Cardio"){
      exercise.type = "Cardio"
      exercise.name = $("#cardioName").val().trim();
      exercise.duration = $("#cardioDuration").val().trim()
    }else{
      exercise.type = "Resistance"
      exercise.name = $("#resistanceName").val().trim();
      exercise.duration = $("#resistanceDuration").val().trim();
      exercise.weight= $("#resistanceWeight").val().trim();
      exercise.repetition = $("#resistanceRep").val().trim();
      exercise.sets = $("#resistanceSet").val().trim()
    }

    API.addExercise(exercise, lastWorkout._id).then(data=> window.location.reload())
  })

})