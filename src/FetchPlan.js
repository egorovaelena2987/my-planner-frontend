import axios from 'axios';

const getAllPlans = (setPlan) => {
    axios.get('https://backend-plan-new.onrender.com')
    .then(({data}) => {console.log(data)
        setPlan(data)
    })
}
const addPlan = (name, setName, setPlan) => {
    axios.post('https://backend-plan-new.onrender.com/savePlan', {name})
    .then((data) => {
        console.log(data);
        setName("");
        getAllPlans(setPlan)
    })
}
const editPlan = (planId, name, setName, setPlan, setEditing) => {
    axios.put('https://backend-plan-new.onrender.com/editPlan', {_id:planId, name})
    .then((data) => {
        console.log(data);
        setName("");
        setEditing(false)
        getAllPlans(setPlan)
    })
}
const deletePlan = (_id, setPlan) => {
    axios.post('https://backend-plan-new.onrender.com/deletePlan', {_id})
    .then((data) => {
        console.log(data);
        getAllPlans(setPlan)
    })
}

export {getAllPlans, addPlan, editPlan, deletePlan}
