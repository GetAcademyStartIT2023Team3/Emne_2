function curriculumDummyDataV1() {
    // we already have 3 weeks, lets add 10 more starting from 4
    for (let weekNumber = 4; weekNumber <= 14; weekNumber++) {
        model.curriculum.weekPlan.push(
            { week: weekNumber, monday: [4, 3], tuesday: [2], wednesday: [2], thursday: [7, 3], friday: [4] }
        );
    }
}
