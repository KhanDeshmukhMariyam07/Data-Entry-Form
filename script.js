function addRow() {
    const co = document.getElementById('co').value;
    const name = document.getElementById('name').value;
    const bl = document.getElementById('bl').value;
    const revenueCheckboxes = document.querySelectorAll('#revenue input[type="checkbox"]');
    const revenue = Array.from(revenueCheckboxes)
                         .filter(checkbox => checkbox.checked)
                         .map(checkbox => checkbox.value)
                         .join(', ');

    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = co;
    cell2.textContent = name;
    cell3.textContent = bl;
    cell4.textContent = revenue;

    document.getElementById('co').value = '1';
    document.getElementById('name').value = '';
    document.getElementById('bl').value = '1';
    revenueCheckboxes.forEach(checkbox => checkbox.checked = false);
}

function addTeacher() {
    const newTeacherInput = document.getElementById('new-teacher');
    const newTeacherName = newTeacherInput.value.trim();
    
    if (newTeacherName) {
        const revenueContainer = document.getElementById('revenue');
        const existingLabels = revenueContainer.querySelectorAll('label');

        // Check if the teacher already exists
        const teacherExists = Array.from(existingLabels).some(label => label.textContent.includes(newTeacherName));
        
        if (!teacherExists) {
            const newLabel = document.createElement('label');
            const newCheckbox = document.createElement('input');
            newCheckbox.type = 'checkbox';
            newCheckbox.value = newTeacherName;
            newLabel.appendChild(newCheckbox);
            newLabel.appendChild(document.createTextNode(' ' + newTeacherName));
            revenueContainer.appendChild(newLabel);
            newTeacherInput.value = '';
        } else {
            alert('Teacher already exists in the list.');
        }
    } else {
        alert('Please enter a teacher\'s name.');
    }
}
