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
  arrayUnion,
  arrayRemove,
  doc,
  query,
  orderBy,
  where,
  getDoc,
  updateDoc,
  getDocs,
  getDocFromCache,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { formatDateFirebase } from "./utils/format-data";
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
export async function addLearningSpace(novoLearningSpace) {
  try {
    const docRef = await addDoc(collection(db, "Learning_Spaces"), {
      ...novoLearningSpace,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
    console.log("Learning Space adicionado com sucesso! ID:", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Erro ao adicionar Learning Space:", error);
  }
}
// adicionando usuarios
export async function addUser(name, email, uid) {
  try {
    const userRef = await setDoc(doc(db, "Users", uid), {
      name: name,
      email: email,
      created_at: serverTimestamp(),
    });
    console.log("Usuário adicionado com ID: ", userRef);
  } catch (error) {
    console.error("Erro ao adicionar usuário: ", error);
  }
}
export async function getUserByEmail(email) {
  const usersRef = collection(db, "Users");
  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size > 0) {
    const user = querySnapshot.docs[0].data();
    // Faça algo com o usuário retornado, como exibir suas propriedades
    return user;
  } else {
    // O usuário não foi encontrado
    return false;
  }
}

export // Adicionando anotações a um usuário existente
async function addAnnotations(userId, newAnnotation) {
  try {
    const userRef = doc(db, "Users", userId);
    await updateDoc(userRef, {
      annotations: arrayUnion(newAnnotation),
    });
    console.log("Anotações adicionadas com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar anotações: ", error);
  }
}
// get learning spaces by id
export async function getLearningSpaceById(id) {
  const docRef = doc(db, "Learning_Spaces", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const learningSpace = docSnap.data();
    // Faça algo com o documento retornado, como exibir suas propriedades
    console.log("learning space vindo agora: " + learningSpace);
    return learningSpace;
  } else {
    // O documento não foi encontrado
    console.log("Documento não encontrado!");
    return false;
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
      created_at: formatDateFirebase(doc.data().created_at),
      updated_at: formatDateFirebase(doc.data().updated_at),
      users: doc.data().Users,
    };
    learningSpaces.push(learningSpace);
  });

  return learningSpaces;
}
export async function addUserToALearningSpace(lsId, userid) {
  if (!lsId || !userid) {
    return false;
  }
  try {
    const lsRef = doc(db, "Learning_Spaces", lsId);
    await updateDoc(lsRef, {
      Users: arrayUnion(userid),
    });
    console.log("Usuário adicionado com ID: ", lsRef);
  } catch (error) {
    console.error("Erro ao adicionar usuário: ", error);
  }
}
export async function removeUserToALearningSpace(lsId, userid) {
  if (!lsId || !userid) {
    return false;
  }
  try {
    const lsRef = doc(db, "Learning_Spaces", lsId);
    await updateDoc(lsRef, {
      Users: arrayRemove(userid),
    });
    console.log("Usuário removido com ID: ", lsRef);
  } catch (error) {
    console.error("Erro ao remover usuário: ", error);
  }
}

export async function addPost(learningSpaceID, userId, title, content) {
  const docRef = doc(db, "Learning_Spaces", learningSpaceID);

  //Crie um novo documento dentro da subcoleção 'Posts'
  const newPostRef = await addDoc(collection(docRef, "Posts"), {
    title,
    content,
    user_id: userId,
    created_at: new Date(),
    upvotes: [],
    downvotes: [],
  });

  return newPostRef;
}

export async function addComment(
  learningSpaceId,
  postId,
  userId,
  content,
  userName
) {
  const docRef = doc(db, "Learning_Spaces", learningSpaceId, "Posts", postId);

  //Crie um novo documento dentro da subcoleção 'Posts'
  const newCommentRef = await addDoc(collection(docRef, "Comments"), {
    content,
    userName,
    user_id: userId,
    created_at: new Date(),
    upvotes: [],
    downvotes: [],
  });

  return newCommentRef;
}
export async function getComment(learningSpacesId, PostId) {
  const docRef = doc(db, "Learning_Spaces", learningSpacesId, "Posts", PostId);
  const commentsRef = collection(docRef, "Comments");
  const q = query(commentsRef, orderBy("created_at", "desc"));
  const commentsQuerySnapshot = await getDocs(q);
  //Crie um novo documento dentro da subcoleção 'Posts'
  const comments = commentsQuerySnapshot.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    return { id, ...data };
  });
  return comments;
}

export async function getPosts(learningSpaceID) {
  const docRef = doc(db, "Learning_Spaces", learningSpaceID);
  const postsRef = collection(docRef, "Posts");
  const q = query(postsRef, orderBy("created_at", "desc"));
  const postsQuerySnapshot = await getDocs(q);

  const posts = postsQuerySnapshot.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    return { id, ...data };
  });
  return posts;
}
export async function getUserById(userId) {
  const usersRef = doc(db, "Users", userId);
  const userDoc = await getDoc(usersRef);
  return userDoc.data();
}
//utils;
export async function addActiveUsersToALearningSpace(lsId, name, userid) {
  if (!userid || !lsId || !name) {
    return false;
  }
  try {
    const lsRef = doc(db, "Learning_Spaces", lsId);
    await updateDoc(lsRef, {
      ActiveUsers: arrayUnion({ name: name, id: userid }),
    });
    console.log("Usuário adicionado com ID: ", lsRef);
  } catch (error) {
    console.error("Erro ao adicionar usuário: ", error);
  }
}
export async function updateUpvotesAndDownvotes(
  learningSpaceID,
  postId,
  upvotes,
  downvotes,
  commentId
) {
  const postPath = commentId
    ? `Learning_Spaces/${learningSpaceID}/Posts/${postId}/Comments/${commentId}`
    : `Learning_Spaces/${learningSpaceID}/Posts/${postId}`;

  const postRef = doc(db, postPath);

  try {
    await updateDoc(postRef, {
      upvotes: upvotes,
      downvotes: downvotes,
    });

    console.log("Upvotes and downvotes updated successfully!");
  } catch (error) {
    console.error("Error updating upvotes and downvotes:", error);
  }
}
export async function upvoteAndDownvote(learningSpaceID, postId, commentId) {
  const args =
    commentId !== undefined
      ? [
          db,
          "Learning_Spaces",
          learningSpaceID,
          "Posts",
          postId,
          "Comments",
          commentId,
        ]
      : [db, "Learning_Spaces", learningSpaceID, "Posts", postId];

  console.log(...args);
  const docRef = doc(...args);
  try {
    const querySnapshot = await getDoc(docRef);

    return {
      downvotes: querySnapshot.data().downvotes,
      upvotes: querySnapshot.data().upvotes,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function getActiveUsersFromLearningSpace(lsId) {
  if (!lsId) {
    return false;
  }
  try {
    const lsRef = doc(db, "Learning_Spaces", lsId);
    const lsDoc = await getDoc(lsRef);
    return lsDoc.data().ActiveUsers;
  } catch (error) {
    console.error("Erro ao adicionar obter usuarios ativos: ", error);
  }
}
export async function getLearningSpacesByKeywords(arrayKeywords) {
  const learningSpacesRef = collection(db, "Learning_Spaces");

  const q = query(
    learningSpacesRef,
    where("keywords", "array-contains-any", arrayKeywords)
  );

  const querySnapshot = await getDocs(q);

  const learningSpaces = [];

  querySnapshot.forEach((doc) => {
    const learningSpace = doc.data();
    learningSpace.id = doc.id;
    learningSpaces.push(learningSpace);
  });

  return learningSpaces;
}
export default auth;
