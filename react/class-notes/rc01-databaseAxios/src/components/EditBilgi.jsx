import React from 'react'

const EditBilgi = ({edit,setEdit,putBilgiler}) => {

  console.log(edit);
  
  return (
    <div
      class="modal fade"
      id="osman"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Modal
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                className="form-control"
                value={edit.title}
                onChange={(e) => setEdit({ ...edit, title: e.target.value })}
                // tıklanan inputta tamirci sayesinde (içinde 3 veri var), sadece ilgili veri değişsin diye, diğerlerini elleme yani ...edit yaparak güncelledik
              />
            </div>

            <div>
              <label htmlFor="desc">Description</label>
              <input
                id="desc"
                className="form-control"
                type="text"
                onChange={(e) => setEdit({ ...edit, description: e.target.value })}
                value={edit.description}
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger"
            onClick={()=>putBilgiler(edit)}
            // iki inputta içi güncellenen edit değişkenini database e yolladık
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBilgi