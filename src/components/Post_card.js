import Component from './core/Component';

class Post_card extends Component {

    template() {
        const content = this._state.content;
        return `
        <div class="post-wrap">
            <div class="post-idx post-link" data-idx='${content.idx}'>
                <img class='sub_thumbnail post-link' src='${content.imageUrl}'>
                <div class='sub_title post-link'>${content.title}</div>
                <div class='sub_content post-link'>${content.summaryContent}</div>
            </div>
            <div class="sub_writer">by ${content.mediaName}</div>
        </div>
        `;
    }
}

export default Post_card;