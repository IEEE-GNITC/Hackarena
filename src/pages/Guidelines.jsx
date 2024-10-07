import React from 'react'
import './Guidelines.css';
import photo from '../assets/hackimg4.png'
function Guidelines() {
  return (
    <div class="container my-5" id="Guidelines">
      <div class="row my-5">
        <div class="col-12 col-lg-6 mb-lg-12 d-flex">
          <img src={photo}/>
        </div>
       <div class="col-12 col-lg-6 mb-lg-12 d-flex mt-5">
        <div class="row">
        <div class="my-3 mb-lg-12 col-lg-12">
          <div class="card w-100 mx-auto">
            <div class="card-body">
              <button class="btn w-100" data-bs-toggle="modal" data-bs-target="#Team">
                <h1>Team</h1>
                <p class="text-secondary">Guidelines</p>
              </button>
            </div>
          </div>
        </div>
        <div class="my-3 mb-lg-12 col-lg-12">
          <div class="card w-100 mx-auto">
            <div class="card-body">
              <button class="btn w-100" data-bs-toggle="modal" data-bs-target="#Accomodation">
                <h1>Accomodation</h1>
                <p class="text-secondary">Guidelines</p>
              </button>
            </div>
          </div>
        </div>
        <div class="my-3 mb-lg-12 col-lg-12">
          <div class="card w-100 mx-auto">
            <div class="card-body">
              <button class="btn w-100" data-bs-toggle="modal" data-bs-target="#Food">
                <h1>Food</h1>
                <p class="text-secondary">Guidelines</p>
              </button>
            </div>
          </div>
        </div>
        </div>
       </div>
      </div>
      {/* Modal one */}
      <div class="modal_wrapper">
          <div class="modal fade" id="Team">
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                <h3 class="display-6">Team</h3>
                <button type='button' class="btn-close float-end" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-12 form-one">
                      <ul>
                        <li class="my-2">Minimum 3 members , max 6 members</li>
                        <li class="my-2">One girl mandatory</li>
                        <li class="my-2">IEEE members registration fee 500 per person</li>
                        <li class="my-2">Non IEEE members registration fee 650 person</li>
                        <li class="my-2">Should be registered in an undergraduate / postgraduate degree</li>
                        <li class="my-2">Members can be from different colleges
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      {/* Modal one */}
      {/* Modal two */}
      <div class="modal_wrapper">
          <div class="modal fade" id="Accomodation">
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                <h3 class="display-6">Accomodation</h3>
                <button type='button' class="btn-close float-end" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-12 form-one">
                      <ul>
                        <li class="my-2">IEEE and Non IEEE fee 200 / day per person</li>
                        <li class="my-2">Separate rooms are allocated for boys and girls</li>
                        <li class="my-2">Fine will be imposed to any damage to residence property</li>
                        <li class="my-2">Wifi will be provided in residence</li>
                        <li class="my-2">Management is not liable for the loss of any of your valuable items.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      {/* Modal two */}
      {/* Modal three */}
      <div class="modal_wrapper">
          <div class="modal fade" id="Food">
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                <h3 class="display-6">Food</h3>
                <button type='button' class="btn-close float-end" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-12 form-one">
                      <ul>
                        <li class="my-2">Food can be purchased from the canteen or food trucks</li>
                        <li class="my-2">Should follow the canteen rules and timings</li>
                        <li class="my-2">Littering of food may lead to imposal fo fine</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      {/* Modal three */}
    </div>
  )
}

export default Guidelines
