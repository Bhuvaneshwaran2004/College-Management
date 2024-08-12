let editingRow = null;

function saveStudent() {
    const name = document.getElementById('firstName').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const course = document.getElementById('course').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !dob || !course || !gender || !email || !phone || !address || !confirmPassword || !password) {
        alert('Please fill out all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (editingRow) {
        // Update existing row
        editingRow.innerHTML = `
            <td>${name}</td>
            <td>${gender}</td>
            <td>${email}</td>
            <td>${dob}</td>
            <td>${phone}</td>
            <td>${address}</td>
            <td>${course}</td>
            <td>
                <button class="edit-button btn btn-secondary" onclick="editStudent(this)">Edit</button>
                <button class="delete-button btn btn-danger" onclick="deleteStudent(this)">Delete</button>
            </td>
        `;
        editingRow = null;
    } else {
        // Add new row
        const studentTable = document.getElementById('studentTable');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${gender}</td>
            <td>${email}</td>
            <td>${dob}</td>
            <td>${phone}</td>
            <td>${address}</td>
            <td>${course}</td>
            <td>
                <button class="edit-button btn btn-secondary" onclick="editStudent(this)">Edit</button>
                <button class="delete-button btn btn-danger" onclick="deleteStudent(this)">Delete</button>
            </td>
        `;

        studentTable.appendChild(newRow);
    }

    // Clear form fields
    document.getElementById('studentForm').reset();
}

function editStudent(button) {
    editingRow = button.parentNode.parentNode;
    document.getElementById('firstName').value = editingRow.cells[0].textContent;
    document.getElementById('gender').value = editingRow.cells[1].textContent;
    document.getElementById('email').value = editingRow.cells[2].textContent;
    document.getElementById('dob').value = editingRow.cells[3].textContent;
    document.getElementById('phone').value = editingRow.cells[4].textContent;
    document.getElementById('address').value = editingRow.cells[5].textContent;
    document.getElementById('course').value = editingRow.cells[6].textContent;
}

function deleteStudent(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
