import { db } from '../config/firebase.config';
import { User } from '../models/user.model';

const usersCollection = db.collection('users');

class UserRepository {
    async findByEmail(email: string): Promise<User | null> {
        const snapshot = await usersCollection.where('email', '==', email).limit(1).get();
        if (snapshot.empty) return null;
        const doc = snapshot.docs[0];
        return { id: doc.id, ...doc.data() } as User;
    }

    async create(email: string): Promise<User> {
        const docRef = await usersCollection.add({
            email,
            createdAt: new Date(),
        });
        const doc = await docRef.get();
        return { id: doc.id, ...doc.data() } as User;
    }
}

export default UserRepository; 