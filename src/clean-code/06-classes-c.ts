(()=>{

    // Aplicando el principio de responsabilidad única
    // Priorizar la composición ante la herencia

    interface PersonProps {
        birthdate: Date
        gender: Gender,
        name: string,
    }

    type Gender = 'M' | 'F'

    class Person {
        public birthdate: Date;
        public gender: string;
        public name: string;

        constructor({ name, gender, birthdate } : PersonProps
        ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public role: string;
        public lastAccess:  Date;

        constructor({ email, role} : UserProps){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings {
        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({
            lastOpenFolder,
            workingDirectory,
        } : SettingsProps ){
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingsProps {
        name: string;
        gender: Gender;
        birthdate: Date;
        email: string;
        role: string;
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor(
            {name, gender, birthdate, email, role, lastOpenFolder, workingDirectory} : UserSettingsProps
        ){
            this.person = new Person({ name, gender, birthdate  })
            this.user = new User({ email, role })
            this.settings = new Settings({ lastOpenFolder, workingDirectory })
        }

    }

    const userSetting = new UserSettings({
        workingDirectory : '/usr/home',
        lastOpenFolder : '/home',
        email : 'josjul@example.com',
        role: 'Admin',
        name : 'Julian',
        gender : 'M',
        birthdate : new Date('2003-06-30')
    })

    console.log({userSetting})


})()
