<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBQgq3jwip2q9PQ0sSoxvZL1XbUNZvL7KI",
    authDomain: "sirhenry-ed030.firebaseapp.com",
    projectId: "sirhenry-ed030",
    storageBucket: "sirhenry-ed030.appspot.com",
    messagingSenderId: "258305420826",
    appId: "1:258305420826:web:978178830620f37ec86ba3"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window.db = db;
</script>
