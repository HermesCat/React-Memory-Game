import React, { Component } from "react";
import FriendCard from "../FriendCard";
import Wrapper from "../Wrapper";
import Title from "../Title";
import friends from "../../friends.json";

class Cards extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        friends
    };

    removeFriend = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const friends = this.state.friends.filter(friend => friend.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ friends });
    };

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <>
                <Wrapper>
                    <Title>Select A Card</Title>
                    {this.state.friends.map(friend => (
                        <FriendCard
                            image={friend.image}
                        />
                    ))}
                </Wrapper>
            </>
        );
    }
}

export default Cards;
