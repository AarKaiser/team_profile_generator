function renderEngineer (data) {
return`
<div class="row justify-content-between" id="dynaCards">
        <div class="card shadow m-2 p-3 mb-5 bg-white rounded"
          style="width: 18rem">
          <div class="card-body">
            <div class="bg-primary p-2 rounded text-light">
              <h5 class="card-title" id="name">${data.teammembername}</h5>
              <h5 class="card-title" id="position">
                <span><i class="fas fa-glasses"></i></span>${data.teammembertype}</h5>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">Id: ${data.teammemberid}</li>
            <li class="list-group-item" id="email">
              Email: <a href="mailto: ${data.teammemberemail}">${data.teammemberemail}</a></li>
            <li class="list-group-item">Github: <a href="http://www.github.com/${data.teammembergithub}">${data.teammembergithub}</a></li>
          </ul>
          <div class="card-body"></div>
        </div>`
}

module.exports = {renderEngineer};