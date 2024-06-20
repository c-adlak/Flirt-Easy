var users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessages: 2,
    location: "Delhi, India",
    name: "Chandni",
    age: 23,
    interests: [
      {
        icon: `<i class="fa-solid fa-music fa-xs" style="color: #fafcff;"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="fa-solid fa-pen-nib fa-xs" style="color: #ffffff;"></i>`,
        interest: "writing",
      },
    ],
    bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis ex sint.",
    isfriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessages: 3,
    location: "Bhopal, India",
    name: "sheriya",
    age: 22,
    interests: [
      {
        icon: `<i class="fa-solid fa-music fa-xs" style="color: #fafcff;"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="fa-solid fa-pen-nib fa-xs" style="color: #ffffff;"></i>`,
        interest: "writing",
      },
    ],
    bio: " Lorem ipsum dolor sit amet consectetur adipisicing.",
    isfriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessages: 9,
    location: "Mumbai, India",
    name: "anisha",
    age: 26,
    interests: [
      {
        icon: `<i class="fa-solid fa-music fa-xs" style="color: #fafcff;"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="fa-solid fa-pen-nib fa-xs" style="color: #ffffff;"></i>`,
        interest: "writing",
      },
    ],
    bio: " Lorem ipsum dolor sit cing elit. Saepe perferendis ex sint.",
    isfriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessages: 4,
    location: "Banglore, India",
    name: "ashvariya",
    age: 19,
    interests: [
      {
        icon: `<i class="fa-solid fa-music fa-xs" style="color: #fafcff;"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="fa-solid fa-pen-nib fa-xs" style="color: #ffffff;"></i>`,
        interest: "writing",
      },
    ],
    bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis ex sint.",
    isfriend: null,
  },
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1668896123992-43b8b27cf758?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://plus.unsplash.com/premium_photo-1668896123808-cd4f065911fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessages: 4,
    location: "kashmir, India",
    name: "khwaish",
    age: 28,
    interests: [
      {
        icon: `<i class="fa-solid fa-music fa-xs" style="color: #fafcff;"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="fa-solid fa-pen-nib fa-xs" style="color: #ffffff;"></i>`,
        interest: "writing",
      },
    ],
    bio: " Lorem etur adipisicing elit. Saepe perferendis ex sint.",
    isfriend: null,
  },
];
function select(elem) {
  return document.querySelector(elem);
}
let curr = 0;
let isAnimating = false;
function setData(index) {
  select(".prflimg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMessages;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;
  var clutter = "";
  users[curr].interests.forEach(function (interest) {
    clutter += `<div
    class="tag flex gap-3 items-center bg-white/30 rounded-full px-3 py-1"
  >
 ${interest.icon}
    <h3 class="text-sm capitalize">${interest.interest}</h3>
  </div>`;
  });
  select(".tags").innerHTML = clutter;
  select(".bio p").textContent = users[curr].bio;
}
(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1].displayPic;
  setData(curr);
  curr = 2;
})();
// (function setInitial() {
//   if (users.length > 0) {
//     select(".maincard img").src = users[curr].displayPic;
//     if (curr + 1 < users.length) {
//       select(".incomingcard img").src = users[curr + 1].displayPic;
//     }
//     setData();
//     curr = 2;
//   }
// })();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;

        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });
    tl.to(
      ".maincard",
      {
        sacle: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incomingcard",
      {
        sacle: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}
let deny = select(".deny");
let accept = select(".accept");
deny.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1,
  });
});
accept.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1,
  });
});
(function containerCreator() {
  document.querySelectorAll(".element").forEach((element) => {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container,'overflow-hidden'`);
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();
