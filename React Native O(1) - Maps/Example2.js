import React, { useState } from 'react';

function UserSettingsComponent() {
    // Initialize a Map in state
    const [settings, setSettings] = useState(new Map([
        ['theme', 'dark'],
        ['notifications', true],
    ]));

    // Function to add or update settings
    const addOrUpdateSetting = (key, value) => {
        setSettings(prevSettings => new Map(prevSettings).set(key, value));
    };

    // Function to read a setting (demonstrated by logging it to the console)
    const readSetting = key => {
        if (settings.has(key)) {
            console.log(`Value for ${key}:`, settings.get(key));
        } else {
            console.log(`Setting ${key} not found.`);
        }
    };

    // Function to delete a setting
    const deleteSetting = key => {
        if (settings.has(key)) {
            setSettings(prevSettings => {
                const newSettings = new Map(prevSettings);
                newSettings.delete(key);
                return newSettings;
            });
        } else {
            console.log(`Setting ${key} not found.`);
        }
    };

    return (
        <div>
            <h1>User Settings</h1>
            <button onClick={() => addOrUpdateSetting('theme', 'light')}>Switch Theme to Light</button>
            <button onClick={() => addOrUpdateSetting('notifications', false)}>Toggle Notifications Off</button>
            <button onClick={() => deleteSetting('theme')}>Delete Theme Setting</button>
            <button onClick={() => readSetting('notifications')}>Read Notifications Setting</button>
            <div>
                <h2>Current Settings:</h2>
                <ul>
                    {[...settings].map(([key, value]) => (
                        <li key={key}>{key}: {String(value)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserSettingsComponent;
