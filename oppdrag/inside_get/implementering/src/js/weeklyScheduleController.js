function navigateWeekToWeek(number) {
    model.app.pages.weeklySchedulePage.currentWeek = number;
    updateView();
}
