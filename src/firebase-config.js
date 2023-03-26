// Import the functions you need from the SDKs you need
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // put your firebase credentials here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// sign with email and pass
export const singInFirebase = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const createUserWithFirebase = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
//add firestore
export const db = getFirestore(app);

// function create learning spaces an object like this below is necessary as argument
// const novoLearningSpace = {
//   thumbnail: "https://exemplo.com/html_css.png",
//   title: "Aprendendo HTML e CSS",
//   prerequisites: ["Nenhum pré-requisito necessário"],
//   keywords: ["HTML", "CSS", "Web development"],
// };
export async function adicionarLearningSpace(novoLearningSpace) {
  try {
    const docRef = await addDoc(collection(db, "Learning_Spaces"), {
      ...novoLearningSpace,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
    console.log("Learning Space adicionado com sucesso! ID:", docRef.id);
  } catch (error) {
    console.error("Erro ao adicionar Learning Space:", error);
  }
}
// adicionando usuarios
export async function addUser(name, email) {
  try {
    const userRef = await addDoc(collection(db, "Users"), {
      name: name,
      email: email,
      created_at: serverTimestamp(),
    });
    console.log("Usuário adicionado com ID: ", userRef.id);
  } catch (error) {
    console.error("Erro ao adicionar usuário: ", error);
  }
}
export // Adicionando anotações a um usuário existente
async function addAnnotations(userId, annotations) {
  try {
    const userRef = doc(db, "Users", userId);
    await updateDoc(userRef, {
      annotations: annotations,
    });
    console.log("Anotações adicionadas com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar anotações: ", error);
  }
}

// Função para obter todos os learning spaces
export async function getAllLearningSpaces() {
  const querySnapshot = await getDocs(collection(db, "Learning_Spaces"));
  const learningSpaces = [];

  querySnapshot.forEach((doc) => {
    const learningSpace = {
      id: doc.id,
      thumbnail: doc.data().thumbnail,
      title: doc.data().title,
      prerequisites: doc.data().prerequisites,
      keywords: doc.data().keywords,
      created_at: doc.data().created_at,
      updated_at: doc.data().updated_at,
      users: doc.data().Users,
    };
    learningSpaces.push(learningSpace);
  });

  return learningSpaces;
}

//utils;

export default auth;
