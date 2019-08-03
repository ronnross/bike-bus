const waypoint = {
  lat: "",
  long: "",
  // description: "",
  time: "",
};

const route = {
  name: "",
  captain: "",
  plan: [waypoint, waypoint, waypoint],
  checkins: [waypoint, waypoint],
};


//app work

      //read data
      db.collection("routes")
        .get()
        .then(snapshot => {
          // entire docs for the document store
          // console.log(snapshot.docs)

          // have to interate over documents
          snapshot.docs.forEach(doc => {
            // have to call data to unwrap the object
            console.log(doc.data());
          });
        });

      // write data
      db.collection("routes").add({
        name: "",
        captain: "",
        plan: [waypoint, waypoint, waypoint],
        checkins: [waypoint, waypoint],
      });

      // deleting data
      db.collection("routes").doc("id of document").delete;

      // update data 
      // just the part of the object that needs updating
      db.collection("routes").doc("id").update({
        name: "updated value"
      })
      // you can use .set but it updates the entire document removing any fields not specified 
      // special query with order and where
      db.collection("routes")
        .where("city", "==", "manchester")
        .orderBy('name')
        .get()
        .then(snapshot => {
          // entire docs for the document store
          // console.log(snapshot.docs)

          // have to interate over documents
          snapshot.docs.forEach(doc => {
            // have to call data to unwrap the object
            console.log(doc.data());
          });
        });

      // real-time update

      db.collection("routes").orderBy("city").onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        console.log('changes', changes)

        changes.forEach(change => {
          if (change.type === "added") {
            //render change.doc.data()
          } else if (change.type === "removed") {
            //remove
          }
          
        })

      })
