function navigateWeek(number) {
    let week = model.app.pages.weeklySchedulePage
    week.currentWeek += number;
    if (week.currentWeek < 1) week.currentWeek = 1;
    if (week.currentWeek > 20) week.currentWeek = 20;
    updateView();
}
