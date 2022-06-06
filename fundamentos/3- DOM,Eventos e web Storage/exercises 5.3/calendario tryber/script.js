function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function daysOfCalendar () {
    let getDaysList = document.querySelector('#days')
    
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayItem = document.createElement('li')

        if (day === 24 | day === 31) {
            dayItem.className = 'day holiday'
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem)
        }
        else if (day === 4 | day === 11 | day === 18) {
            dayItem.className = 'day friday'
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem)
        }
        else if (day === 25) {
            dayItem.className = 'day holiday friday'
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem)
        }
        else {
            dayItem.className = 'day'
            dayItem.innerHTML = day
            getDaysList.appendChild(dayItem)
        }
    }
    
  }
  daysOfCalendar();

  function holidayButton (buttonName) {
    let buttonsContainer = document.querySelector('.buttons-container')
    let newButton = document.createElement('button')
    let newButtonId = 'btn-holiday'
    newButton.innerHTML = buttonName;
    newButton.id = newButtonId
    buttonsContainer.appendChild(newButton)
  }
  holidayButton ('Feriados')
  
  function displayHolidays() {
      let getHolidayButton = document.querySelector('#btn-holiday')
      let getHolidays = document.querySelectorAll('.holiday')
      let backgroundColor = 'rgb(238,238,238)';
      let newColor = 'red'

      getHolidayButton.addEventListener('click', function() {
          for (let index = 0; index < getHolidays.length; index += 1) {
              if (getHolidays[index].style.backgroundColor === newColor) {
                  getHolidays[index].style.backgroundColor = backgroundColor;
              }
              else {
                  getHolidays[index].style.backgroundColor = newColor
              }
          }
      })
  }
  displayHolidays()

  function fridayButton (buttonName) {
    let buttonsContainer = document.querySelector('.buttons-container')
    let newButton = document.createElement('button')
    let newButtonId = 'btn-friday'
    newButton.innerHTML = buttonName;
    newButton.id = newButtonId
    buttonsContainer.appendChild(newButton)
  }
  fridayButton ('Sexta-feira')

  function displayFriday(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday')
    let fridays = document.getElementsByClassName('friday')
    let newFridayText = 'Sexta-feira';

    getFridayButton.addEventListener('click', function() {
        for (let index = 0; index < fridays.length; index += 1) {
            if (fridays[index].innerHTML !== newFridayText) {
                fridays[index].innerHTML = newFridayText
            }
            else {
                fridays[index].innerHTML = fridaysArray[index]
            }
        }
    })
}
let dezFridays = [ 4, 11, 18, 25 ];
displayFriday(dezFridays)

    function dayMouseOver() {
        let days = document.querySelector('#days')

        days.addEventListener ('mouseover', function(event) {
            event.target.style.fontSize = '30px';
            event.target.style.fontWeight = '600';
        })
    }

    function dayMouseOut    () {
        let days = document.querySelector('#days')

        days.addEventListener ('mouseout', function(event) {
            event.target.style.fontSize = '20px';
            event.target.style.fontWeight = '200';
        })
    }
    dayMouseOver();
    dayMouseOut();

    function newTask(task) {
        let tasksContainer = document.querySelector('.my-tasks');
        let taskName = document.createElement('span')

        taskName.innerHTML = task;
        tasksContainer.appendChild(taskName)
    }
    newTaskSpan('Projeto:')