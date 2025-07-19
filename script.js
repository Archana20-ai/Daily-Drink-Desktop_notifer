// document.addEventListener('DOMContentLoaded', (event) => {
//     let goal = 2000; // ml
//     let consumed = 0;

//     const goalDisplay = document.getElementById('goal');
//     const consumedDisplay = document.getElementById('consumed');
//     const addWaterButton = document.getElementById('addWater');

//     goalDisplay.textContent = goal;

//     addWaterButton.addEventListener('click', () => {
//         consumed += 250;
//         consumedDisplay.textContent = consumed;

//         if (consumed >= goal) {
//             notifyUser("Congratulations!", "You've reached your daily water intake goal!");
//         } else {
//             notifyUser("Keep it up!", "Remember to drink water!");
//         }
//     });

//     function notifyUser(title, message) {
//         if (Notification.permission === 'granted') {
//             new Notification(title, { body: message });
//         } else if (Notification.permission !== 'denied') {
//             Notification.requestPermission().then(permission => {
//                 if (permission === 'granted') {
//                     new Notification(title, { body: message });
//                 }
//             });
//         }
//     }
// });






// document.addEventListener('DOMContentLoaded', () => {
//     let goal = 2000; // ml
//     let consumed = 0;

//     const goalDisplay = document.getElementById('goal');
//     const consumedDisplay = document.getElementById('consumed');
//     const addWaterButton = document.getElementById('addWater');

//     goalDisplay.textContent = goal;

//     addWaterButton.addEventListener('click', () => {
//         consumed += 250;
//         consumedDisplay.textContent = consumed;

//         if (consumed >= goal) {
//             notifyUser("Congratulations!", "You've reached your daily water intake goal!");
//         } else {
//             notifyUser("Keep it up!", "Remember to drink water!");
//         }
//     });

//     function notifyUser(title, message) {
//         if (Notification.permission === 'granted') {
//             new Notification(title, { body: message });
//         } else if (Notification.permission !== 'denied') {
//             Notification.requestPermission().then(permission => {
//                 if (permission === 'granted') {
//                     new Notification(title, { body: message });
//                 }
//             });
//         }
//     }

//     // Request notification permission on page load
//     if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
//         Notification.requestPermission().then(permission => {
//             if (permission === 'granted') {
//                 notifyUser("Welcome!", "You will receive notifications about your water intake goal.");
//             }
//         });
//     }
// });




document.addEventListener('DOMContentLoaded', () => {
    let goal = 2000; // ml
    let consumed = 0;

    const goalDisplay = document.getElementById('goal');
    const consumedDisplay = document.getElementById('consumed');
    const addWaterButton = document.getElementById('addWater');

    goalDisplay.textContent = goal;

    addWaterButton.addEventListener('click', () => {
        consumed += 250;
        consumedDisplay.textContent = consumed;

        if (consumed >= goal) {
            notifyUser("Congratulations!", "You've reached your daily water intake goal!");
        } else {
            notifyUser("Keep it up!", "Remember to drink water!");
        }
    });

    function notifyUser(title, message) {
        console.log('Requesting notification permission...');
        if (Notification.permission === 'granted') {
            console.log('Permission granted, showing notification.');
            new Notification(title, { body: message });
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Permission granted, showing notification.');
                    new Notification(title, { body: message });
                } else {
                    console.log('Permission denied.');
                }
            }).catch(err => {
                console.error('Error requesting notification permission:', err);
            });
        } else {
            console.log('Notification permission denied.');
        }
    }

    // Request notification permission on page load
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                notifyUser("Welcome!", "You will receive notifications about your water intake goal.");
            }
        }).catch(err => {
            console.error('Error requesting notification permission:', err);
        });
    }
    setInterval(() => {
        if (Notification.permission === 'granted') {
            notifyUser("Drink Water Reminder", "It's time to drink water!");
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    notifyUser("Drink Water Reminder", "It's time to drink water!");
                }
            }).catch(err => {
                console.error('Error requesting notification permission:', err);
            });
        }
    }, 5000); // 3600000 milliseconds = 1 hour




});
