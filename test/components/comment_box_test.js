import { renderComponent ,expect} from '../test_helper';
import CommentBox  from '../../src/components/comment_box';
describe ('CommentBox' ,()=> {
    let component;
    
      beforeEach(() => {
        component = renderComponent(CommentBox);
      });
      it('has a text area' ,() => {
        //const component = renderComponent(CommentBox);
        expect(component).to.have.class('comment-box')
        });
it('has a text area' ,() => {
//const component = renderComponent(CommentBox);
expect(component.find('textarea')).to.exist;
});

it('has a text area' ,() => {
    //const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
    });
describe ('entering some text ',() => {
    beforeEach(() => {
        // change event is triggered the event called change event  a fake event new comment is new text entered 
        component.find('textarea').simulate('change','new comment')
    })
    it('show text that is text area  ',() =>{

        expect(component.find('textarea')).to.have.value('new comment')
 })
 it('when submitted clears the input ' ,() => {
     component.simulate('submit')
   expect(component.find('textarea')).to.have.value('')     
     })
})
    
})