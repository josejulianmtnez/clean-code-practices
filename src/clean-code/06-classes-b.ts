(()=>{

    // Aplicando un refactor para trabajar como objetos los parámetros del consttructor

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
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess:  Date;

        constructor({ email, role, name, gender, birthdate } : UserProps){
            super({name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings extends User {
        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory,
        } : UserSettingsProps ){
            super( {email, role, name, gender, birthdate} )
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
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
