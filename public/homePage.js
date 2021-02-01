"use strict";
const logoutButton = new LogoutButton();

logoutButton.action = () => {
    ApiConnector.logout(response => {
        if (response.success) {
            location.reload();
        }
    })
}

ApiConnector.current(response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
})

const ratesBoard = new ratesBoard();

ApiConnector.getStocks(response => {
    if (response.sucess) {
        ratesBoard.clearTable();
        ratesBoard.filltable(response.data);
        setInterval(() => {
            ratesBoard.clearTable();
            ratesBoard.filltable(response.data);
        }, 60000);
    }
})