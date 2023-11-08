function curriculumDummyDataV1() {
    // we already have 3 weeks, lets add 10 more starting from 4
    for (let weekNumber = 4; weekNumber <= 14; weekNumber++) {
        model.curriculum.weekPlan.push(
            { week: weekNumber, monday: [], tuesday: [], wednesday: [], thursday: [], friday: [] }
        );
    }
}
