import { renderComponent ,expect} from '../test_helper';
import CommentList from '../../src/components/comment_list'

describe ('CommentList',() =>{
   let component ;
   beforeEach(() =>{
       component = renderComponent(CommentList,null, {comments:['new Comment','other'] })
   }) 

   it('shows an LI for each comment ', () =>{
expect(component.find('li').length).to.equal(2)
   })
   it('shows each comment that is provided', () =>{
    expect(component).to.contain('new Comment')
    expect(component).to.contain('other')
    })
})