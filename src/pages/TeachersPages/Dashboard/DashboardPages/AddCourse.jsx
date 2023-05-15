import React from "react";

const AddCourse = () => {
    const handleFormData = (e)=>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const thumbnail = form.banner.value;
        const course = {
            title,
            name,
            description,
            price,
            thumbnail
        }
        console.log(course)
        fetch('http://localhost:5000/course',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            form.reset();
        })
        
    }
  return (
    <div className="bg-slate-100 p-4 rounded-md">
      <form onSubmit={handleFormData}>
        <div  className="grid grid-cols-2 gap-8">
          <div className="local-form-group">
            <label htmlFor="exampleInputEmail1">Course Title:</label>
            <input
              type="text"
              name="title"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Title"
            />
          </div>
          <div className="local-form-group">
            <label htmlFor="exampleInputEmail1">Teachers Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Teachers name"
            />
          </div>
          <div className="local-form-group">
            <label htmlFor="exampleInputEmail1">Banner Url:</label>
            <input
              type="text"
              name="banner"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Url"
            />
          </div>
          <div className="local-form-group">
            <label htmlFor="exampleInputEmail1">Price:</label>
            <input
              type="text"
              name="price"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="$00"
            />
          </div>
        </div>
        <div className="local-form-group my-5">
            <label htmlFor="exampleInputEmail1">Description: </label>
            <textarea
              type="text"
              name="description"
              className="p-3 outline-none rounded"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Description write here..."
              rows="3"
              cols="50"
            />
          </div>
          <button className="bg-orange-500 rounded-full py-2 font-semibold hover:scale-95 origin-center duration-200 w-full text-white hover:bg-orange-600">Add</button>
      </form>
    </div>
  );
};

export default AddCourse;
