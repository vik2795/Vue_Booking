import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const addNewDate = (w) => {
    let date;
    do {
      let id = Math.round(Math.random() * 1000000000);
      w.id = id
      date = workers.booked-day && workers.booked-time.filter((workers) => workers.booked-date && workers.booked-time == workers.booked-date && workers.booked-time)
    } while (date.length != 0);
    products.value.push(p)     
    saveDate(p)
  }
  const saveDate = (p) => {
    axios.post('http://localhost:3000/bolt',p)
    .then(resp => console.log(resp.status))
  }
  return { count, doubleCount, increment,submitForm ,saveDate}
})
