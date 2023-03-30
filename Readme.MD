#

[screen record a video of all the functionality built in this challenge](https://drive.google.com/file/d/10mVkZNeqR5wDF3fQZyGVe4BmsdENIeat/view?usp=sharing)

##

I will not send the nodemodules folder
to run, just enter the project folder with the terminal and type

```
npm install
```

to install the dependencies

and then

```
npm run dev
```

to run the project in the terminal, a link will probably appear for localhost probably to 5173 port
[localhost](http://localhost:5173/)

# Easy

## What do you need to do in this Easy challenge?

In this easy challenge, the requirements from you are as follows. You need to design and build the functionality:

- [x] Client Signup:

This is where a client will be able to sign up with the following details: Name, Email, and Password.

Client Login:

This is where a client will be able to login with the following details: Email, and Password.

- [x] Navbar:

The navbar navigation will have two options: 1) Profile, and 2) Create Learning Space\*\* \*\*

- [x] Client profile:

When the client clicks on their profile from the navigation, a screen showing all the details of them should render. The required profile details are: Name, Biography and Country of residence, interests (ReactJS tags) and a placeholder photo thumbnail.

# Medium

- [x] Homescreen

This screen will be visible to both authenticated and non-authenticated users.

## The Homescreen will look like this:

- The first section will be a centered heading. If the user is not signed, it will say Sign up to start learning If the User is signed it, it will say Join a learning space below
- Below this section will be the following Co-learning Spaces section.
- There will be a grid of ReactJS cards component displaying all co-learning spaces. Each card will display a thumbnail of a co-learning space, the title, number of members and last update in that space. There is no specific design orientation, you are free to design how it looks, but it has to be in a card and with the information mentioned above. More information about card component is mentioned in the reference section.

- [x] Learning Space

## Viewing Learning Space

- When clicked on any co-learning card from the homepage, the app should render that co-learning space screen.
- A learning space shall display an overview of the learning space.
- A learning space shall display a button to join/leave a learning space near its title. If the user is not authenticated, it should display Sign up to Join otherwise Join
- A learning space shall display a prerequisites list, demonstrating the learning requirements for the learning space. We will cover how this list will appear in the HARD challenge.
- A learning space shall display a list of Posts created inside the learning space in a sorted order by date.
- A learning space shall display a button to create a Post.
- A learning space shall display a list of active users that are currently visiting the learning space. Clicking on one of the users will reroute to their profile page.
- A learning space shall display a list of related learning spaces, which are determined by the keywords used during the creation of learning spaces. We will cover how the keywords are listed in the HARD challenge.

# hard

## Creating a Learning Space

- [x] Creating a Learning Space

- An authenticated user should be able to create a new learning space from the Navbar menu title Create Space
- A new space creation screen should be rendered.
- The screen should have a form with the following fields: Title, description, prerequisites (ReactJS tags), thumbnail.

## Creating a Post

- [x] Creating a Post

- Within a learning space, the user should be able to create a new post.
- The post will have a title and a body. The body should use a Markdown text-editor input. You can refer to the reference to understand more about markdown editors.
- When viewing a post, the post can be saved locally as a PDF

# Creating a Comment

- [x] Creating a Comment

- Within a learning space Post, the user should be able to add a new comment.
- The comment will have a body. The body should use a Markdown text-editor input. You can refer to the reference to understand more about markdown editors.

## Upvotes/Downvotes

- [x] Upvotes/Downvotes

- The users should be able to upvote/downvote a Post, or a comment.

## Annotation

- [ ] Annotation

- Annotation refers to a note by way of explanation or comment added to a text or diagram.
- Within a learning space, inside a post, a user can highlight a text, on highlight it will display an icon to annotate that text. On clicking the icon, a pop up should appear with two items. The first being the highlighted text, and the second being a text field where user can enter their thoughts about the highlighted text.
- The user should be able to see the text highlighted and their annotation on hovering on it after save.
