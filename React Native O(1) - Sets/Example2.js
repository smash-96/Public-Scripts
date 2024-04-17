import React, { useState } from 'react';

function PermissionsManager() {
    // Initialize state with a Set
    const [userPermissions, setUserPermissions] = useState(new Set());

    // Function to add a permission 
    const addPermission = (permission) => {
        setUserPermissions(prevPermissions => new Set([...prevPermissions, permission]));
    };

    // Function to check if a user has a permission
    const hasPermission = (permission) => {
        return userPermissions.has(permission);
    }

    // Function to remove a permission
    const removePermission = (permission) => {
        setUserPermissions(prevPermissions => {
            const newPermissions = new Set(prevPermissions);
            newPermissions.delete(permission);
            return newPermissions;
        });
    };

    return (
        <div>
            <h1>Permissions Manager</h1>
            <button onClick={() => addPermission("edit_posts")}>Add "edit_posts" Permission</button>
            <button onClick={() => removePermission("delete_comments")}>Remove "delete_comments" Permission</button>

            {/* Example: Conditionally display an element based on permission */}
            {hasPermission("manage_users") && (
                <div>
                    {/* Admin-only content here */}
                </div>
            )}

            <h2>Current Permissions:</h2>
            <ul>
                {[...userPermissions].map((permission) => (
                    <li key={permission}>{permission}</li>
                ))}
            </ul>
        </div>
    );
}

export default PermissionsManager;
