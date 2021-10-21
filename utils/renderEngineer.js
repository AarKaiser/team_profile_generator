function renderEngineer (data) {
return`
    <div class="card shadow m-2 p-3 mb-5 bg-white rounded"
      style="width: 18rem">
      <div class="card-body">
        <div class="bg-primary p-2 rounded text-light">
          <h5 class="card-title" id="name">${data.name}</h5>
          <h5 class="card-title" id="position">
            <span><i class="fas fa-glasses"></i></span> ${data.getRole()}</h5>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="id">Id: ${data.id}</li>
        <li class="list-group-item" id="email">
          Email: <a href="mailto: ${data.email}">${data.email}</a></li>
        <li class="list-group-item">Github: <a href="http://www.github.com/${data.github}">${data.github}</a></li>
      </ul>
      <div class="card-body text-center text-success">Dynamically Generated</div>
    </div>`
}

module.exports = {renderEngineer};