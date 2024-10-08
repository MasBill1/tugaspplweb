// Add event listener to each list item
document.querySelectorAll('#jurusan li').forEach((li) => {
    li.addEventListener('click', () => {
        // Toggle the description paragraph
        li.querySelector('p').classList.toggle('show');
    });
});