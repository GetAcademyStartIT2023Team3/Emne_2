// Add dummy data to the model so that we can test different article content.
function addArticleDummyDataId1() {
    model.atoms[0].title = 'Studieteknikk';
    model.atoms[0].text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    model.articles[0].atoms.push([1,3]);
    model.articles[0].atoms.push([2, 4, 5]);
    model.articles[0].atoms.push([1,3]);
}
