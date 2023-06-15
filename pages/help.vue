<script setup lang="ts"></script>

<template>
    <div class="Help">
        <div class="Help-info">
            <p>
                Welcome to our interactive and thrilling voting platform
                inspired by Dungeons & Dragons! Our goal is to provide a secure,
                transparent, and manipulation-resistant voting system, offering
                users a unique way to participate in adventures and make
                decisions in a gaming environment.
            </p>
            <p>
                Instead of traditional voting methods, we have taken an
                innovative approach where users will utilize their crypto assets
                to vote and determine the next actions our brave character will
                undertake in their adventure. Each decision made by the
                community will directly impact the story's development and the
                character's fate.
            </p>
            <p>Here's how it works:</p>
            <ul class="Help-list">
                <li>
                    Crypto Assets: To participate in the game, users must
                    possess crypto assets, which will be used as votes. These
                    crypto assets will be securely stored on our platform.
                </li>
                <li>
                    Action Choices: At key points in the story, different action
                    options will be presented for the community to vote on.
                    These actions may include facing enemies, solving puzzles,
                    exploring mysterious locations, and much more. Users will
                    use their crypto assets to vote for their preferred option.
                </li>
                <li>
                    Rewards: If the character successfully completes the
                    adventure, participants who contributed their votes will
                    receive rewards based on their participation. These rewards
                    may include additional crypto assets, virtual items, or
                    special benefits in future adventures.
                </li>
                <li>
                    Risks: However, it's important to note that the game also
                    carries risks. If the character dies before reaching the end
                    of the adventure, participants will lose the crypto assets
                    they used in the voting process. This adds excitement and
                    challenge to the game, as every decision made by the
                    community is crucial to the character's success.
                </li>
                <li>
                    Transparency and Security: Our platform ensures transparency
                    and security at all times. All transactions and votes made
                    with crypto assets are recorded in a distributed and
                    verifiable ledger, ensuring the integrity of the voting
                    process and preventing any form of manipulation.
                </li>
            </ul>
            <p>
                We are thrilled to have you as part of our community of
                adventurers! Remember that every vote counts and your decisions
                will be critical to the character's fate. Explore new worlds,
                face exciting challenges, and enjoy the rewards you'll receive
                when successfully completing adventures. Let the fun begin!"
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.Help {
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-info {
        height: 70%;
        font-size: larger;
        font-weight: bold;
        width: 50%;
        padding: 20px;
        overflow-y: auto;
        overflow-x: hidden;

        &-list {
            font-size: large;
        }
    }

    &-list {
        list-style-type: decimal;
        padding-left: 20px;

        li {
            margin-bottom: 10px;
        }
    }
}
</style>
