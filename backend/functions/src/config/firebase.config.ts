import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';


const serviceAccount = {
    type: "service_account",
    project_id: "atom-challenge-77faa",
    private_key_id: "a535b691d20fecd0907c229459409f4070e634d2",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpG5cX4jPRrOnk\nBULuPpNEeYkBfU9LIWELiDi6XA+0ujKrpmq9o2lLsrHZ3yOR5BwRRrJPYrm2JX8J\nA0THab9vOeNuC5ulO7kBLac0m2+18ryWGflJxUaax8yOQeAubbMQ8fw5F+018rx1\nylsvSVmSYvRgdcNle2gm/2rxQ+KhdtilKeK56HF7NIHONVLZMjIDnxdPxbU398ba\nG6Gts69sYa45hljBv41OVpgIx79OIP7Ru2QfxX5E/0k8cDsSJT0jplxkgZJue0ug\nVbSkCEXAGSRQQg2TYQpaJ12EbMP3xWMhEQ53EWIsSSpTewVWaDjY0q3dyEiZrYlb\nO1bKlWyLAgMBAAECggEASbtgXQcA/f5M+mD65kK9ViFBhbc7v++9Tthll4e1R2DZ\n3/KO3sFlkx5GIk8CxMT3Iec3rppGi678nRLiRaoLUDUmvt/rzJbmGqfrm+nbwrKj\n3DRV936+wpSz0SDS3Jty9EP163TNtfRwjFEfAdaS6dsgXwBpohE0/6/k0m39XdVr\n59erYB+VHievwSz53oR4wvIKF+C/x6TG6lyeEGTC07RC6ssvSPy6voxDi6jNfAVV\nPIdDkZUEU9vpi6rUOYc8mrI37B9qer+TcrMd/ZEm6lnozb2N48OmmhfXQHV+vvV0\npc2PoyYeKdXxsQDca7x42ggE9J9oFsq7znPvuLlO9QKBgQDlE/a3wkkLsJEUGI98\nnCRG6EEbIRE9nGXtuCgUJLGrFTgbbdv7b7pufNnlzNd0IoZE/cTwObz3/ZOi+wfn\nuNhviChX0XufCTfZrDh/eJJ8QjQlguVfHPN9BOM0x5ZS42xjDZ4cOytDLuHiT+ot\niiD6bdZ1+aXBYzbfX4I+KF+aTQKBgQC8+10hSM9QGFnQHepdOEoiUVVrfqb+8sbH\nEw6C4yRPZ3HU2Z0hnsx/SEHJBaqJi3Mmyf3FefkdpJ1feVJuP+bH60PeQOI+XQHY\nZc7j/F2bVtpD9vE0B7B8epuni6+pIveNSTb9CD9uTyGcccHKlR95T2NYjfWJ2XKq\n2cQfjG9eNwKBgAGH7qAvxjkzxuRxfZQBnyRyLO03fVwCDZRXJL1tuVpBXAyi4VN+\n3aobX4Fvqwj1qhwP7h8E48Rsh24Ra24bCCdGq65akg7wCtWDlyUS8zetYZfWlh3a\nna36OGKD6vdG2dSXpLTfmFxslcnjatc/ExVZYpOLRZZTSWyYwNAViP4JAoGBAIvS\niwg6X7DKI4FY8PMB18/mT4YWEialp67ZCa6LsmzRg6ZRT/H1FSbDZnD+MTxNIei8\nIHfAlDF7fziJghSyUOTvy6ogZYRwuhHK2bVTHkr1is4oYjP10H15Fbt0HYbNqU0u\ns3GpbY0HHT4r6I8joELYGxAFEHtqmG2Sa4pQFIInAoGAMqf4HH+SWTcten6dR422\naWTG3bbOn7Mw+rkxEKTrGFykac8SBEvc04c8nS3DJAEzB14pcWA3DFK+dJGhcle+\nzHp2q0zfuFiTD0XZJJUJExTjktFUtrHtfzl7aadjkTtKpagyqiJcJ++t6lfBt0RW\n9yGm5RoZnEG4Ymx0ZZ/u+6M=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-fbsvc@atom-challenge-77faa.iam.gserviceaccount.com",
    client_id: "116393787321163125525",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40atom-challenge-77faa.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
} as ServiceAccount;


if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export const db = admin.firestore();
export const auth = admin.auth(); 