const loadCourseData = async()=>{
    const res = await fetch('data/data.json');
    const data = await res.json();
    return data
}
export default loadCourseData;