function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const input = document.querySelector('#inputs textarea');
   const resultR = document.querySelector('#bestRestaurant p');
   const resultW = document.querySelector('#workers p');

   function onClick() {
      const restaurants = {};
      const array = JSON.parse(input.value);

      array.forEach(restaurant => {
         const [name, tokens] = restaurant.split(' - ');
         const info = tokens.split(', ');
         let workers = [];

         for (const worker of info) {
            const line = worker.split(' ');
            const salary = Number(line[1]);
            workers.push({ name: line[0], salary, });
         }

         if (restaurants[name]) workers = workers.concat(restaurants[name].workers);

         workers.sort((a, b) => b.salary - a.salary);
         const avgSalary = workers.reduce((acc, c) => acc + c.salary, 0) / workers.length;
         const bestSalary = workers[0].salary;

         restaurants[name] = { workers, avgSalary, bestSalary };
      });

      let bestAvg = 0;
      let bestRestaurant;

      for (const name in restaurants) {

         if (restaurants[name].avgSalary > bestAvg) {
            bestRestaurant = { name, ...restaurants[name] };
         }

         bestAvg = restaurants[name].avgSalary;
      }

      resultR.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let workersResult = [];
      bestRestaurant.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      });

      resultW.textContent = workersResult.join(' ');
   }
}
/*
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function findAvg(arr) {
      const avg = arr.reduce((acc, c) => acc + c.salary, 0);
      return avg / arr.length;
   }

   function findBest(arr) {
      const best = arr.sort((a, b) => b.salary - a.salary);
      return best[0].salary;
   }

   const input = document.querySelector('#inputs textarea');
   const resultR = document.querySelector('#bestRestaurant p');
   const resultW = document.querySelector('#workers p');

   function onClick() {
      const restaurants = {};
      const array = JSON.parse(input.value);

      array.forEach(restaurant => {
         const [name, tokens] = restaurant.split(' - ');
         const info = tokens.split(', ');
         let staff = [];

         for (const worker of info) {
            const line = worker.split(' ');
            staff.push({
               name: line[0],
               salary: Number(line[1]),
            });
         }

         if (!restaurants[name]) restaurants[name] = { workers: staff };
         else restaurants[name].workers = restaurants[name].workers.concat(staff);

         restaurants[name].avgSalary = findAvg(restaurants[name].workers);
         restaurants[name].bestSalary = findBest(restaurants[name].workers);
      });
      
      let bestAvg = 0;
      let bestRestaurant;
      
      for (const name in restaurants) {

         if (restaurants[name].avgSalary > bestAvg) {
            bestRestaurant = {name, ...restaurants[name]}
         }

         bestAvg = restaurants[name].avgSalary;
      }
      
      resultR.textContent = `Name: ${bestRestaurant.name} Average Salary: ${(bestRestaurant.avgSalary).toFixed(2)} Best Salary: ${(bestRestaurant.bestSalary).toFixed(2)}`;

      let workersResult = [];
      bestRestaurant.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      });

      resultW.textContent = workersResult.join(' ');
   }
}
*/