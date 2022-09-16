import React from 'react'

export default function FormEditUser() {
  return (
    <form className="container-fuild" onSubmit={handleSubmit}>
    <div className="row">
        <div className="col-4">

            <div className="form-group">
                <p className="font-weight-bold">Project id</p>
                <input value={values.id} disabled className="form-control" name="id" />
            </div>


        </div>
        <div className="col-4">
            <div className="form-group">
                <p className="font-weight-bold">Project name</p>
                <input value={values.projectName} className="form-control" name="projectName" onChange={handleChange} />
            </div>
        </div>
        <div className="col-4">
            <div className="form-group">
                <p className="font-weight-bold">Project Category</p>
                <select className="form-control" name="categoryId" value={values.categoryId}>
                    {arrProjectCategory?.map((item, index) => {
                        return <option key={index} value={item.id}>
                            {item.projectCategoryName}
                        </option>
                    })}
                </select>


            </div>
        </div>
        
    </div>
</form >
  )
}
