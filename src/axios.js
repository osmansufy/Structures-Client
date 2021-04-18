import axios from 'axios'

const instance=axios.create({
    // baseURL:"//ancient-dusk-66022.herokuapp.com"
    // baseURL:"//localhost:5000/"
     baseURL:"//whispering-scrubland-28858.herokuapp.com/"
})

export default instance