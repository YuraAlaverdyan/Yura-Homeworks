const payments = [
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe", // Name of the student
      payedAmount: 1600, // Amount payed with this transaction
      year: 2020, // The payment year
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1500,
      year: 2021
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1400,
      year: 2022
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1300,
      year: 2023
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1500,
      year: 2020
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1400,
      year: 2021
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1300,
      year: 2023
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1200,
      year: 2023
    }
   ];

   function totalSumOfPayment() {
       let firstSum = 0;
       let secondSum = 0;
       let firstId;
       let secondId;
       for (let i = 0; i < payments.length; i++) {
           if (payments[i].studentId === 1) {
               firstSum += payments[i].payedAmount;
               firstId=(payments[i]);
           }
       }
       for (let j = 0; j < payments.length; j++) {
        if (payments[j].studentId === 2) {
            secondSum += payments[j].payedAmount;
            secondId=(payments[j]);
        }
    }
       console.log(firstSum , firstId);
       console.log(secondSum , secondId);
       
   }
   totalSumOfPayment()