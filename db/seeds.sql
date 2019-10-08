INSERT INTO questions (question) VALUES 
('1. I am the life of the party'), 
('2. I am always prepared'), 
('3. I get stressed out easily'), 
('4. I have little to say'), 
('5. I am relaxed most of the time'), 
('6. I feel comfortable around people'), 
('7. I get upset easily'), 
('8. I make a mess of things'), 
('9. I am quick to understand things'), 
('10. I am happy everyday');

INSERT INTO friends (name, picture_link) VALUES 
('Brit Marling', 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2018/11/Forever-Puppy-600x600.jpg'),
('Taron Egerton', 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2017/04/Chi-chon-Puppy-800x800.jpg'),
('Matt Damon', 'https://cdn4.littlethings.com/app/uploads/2017/05/chihuahua-small-dogs-600x600.jpg'), 
('Claire Foy', 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Goberian-Puppies-For-Sale-600x600.jpg'), 
('Edward Norton', 'https://www.barbour.com/us/media/wysiwyg/Barbour/dottie_222.jpg'), 
('Gal Gadot', 'https://www.darwinspet.com/wp-content/uploads/epilepsy-in-dogs-600x600.jpg'), 
('Jennifer Jason Leigh', 'https://s3-prod.dogtopia.com/wp-content/uploads/2017/09/4.jpg'),
('Robert Downey Jr.', 'https://photos.donedeal.ie/ddimg/NWNmYjcyZjk5ZTU5OGE3MmY1NzljODY2NjlmYmE0NWQopOIX0TJrVEABQU-BGeLUaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2RvbmVkZWFsLmllLXBob3Rvcy9waG90b18xMzE0NDA4ODN8fHw2MDB4NjAwfHx8fHx8fHw=.jpeg'),
('Anne Hathaway', 'https://www.mypetsies.com/media//opengraph_image/orig/5/1/b/67b9132533f2ab014928beee8450e.jpg'),
('Eddie Redmayne', 'http://media.tractorsupply.com/is/image/TractorSupplyCompany/20160509-tsc-popular-dog-breeds-welsh-corgi?$600w$');

INSERT INTO scores (friend_id, question_id, score) VALUES 
(1,1,2), (1,2,3), (1,3,1), (1,4,5), (1,5,3), (1,6,5), (1,7,2), (1,8,4), (1,9,2), (1,10,1),
(2,1,2), (2,2,3), (2,3,1), (2,4,5), (2,5,3), (2,6,5), (2,7,2), (2,8,4), (2,9,2), (2,10,1),
(3,1,2), (3,2,3), (3,3,1), (3,4,5), (3,5,3), (3,6,5), (3,7,2), (3,8,4), (3,9,2), (3,10,1),
(4,1,2), (4,2,3), (4,3,1), (4,4,5), (4,5,3), (4,6,5), (4,7,2), (4,8,4), (4,9,2), (4,10,1),
(5,1,2), (5,2,3), (5,3,1), (5,4,5), (5,5,3), (5,6,5), (5,7,2), (5,8,4), (5,9,2), (5,10,1),
(6,1,2), (6,2,3), (6,3,1), (6,4,5), (6,5,3), (6,6,5), (6,7,2), (6,8,4), (6,9,2), (6,10,1),
(7,1,2), (7,2,3), (7,3,1), (7,4,5), (7,5,3), (7,6,5), (7,7,2), (7,8,4), (7,9,2), (7,10,1),
(8,1,2), (8,2,3), (8,3,1), (8,4,5), (8,5,3), (8,6,5), (8,7,2), (8,8,4), (8,9,2), (8,10,1),
(9,1,2), (9,2,3), (9,3,1), (9,4,5), (9,5,3), (9,6,5), (9,7,2), (9,8,4), (9,9,2), (9,10,1),
(10,1,2), (10,2,3), (10,3,1), (10,4,5), (10,5,3), (10,6,5), (10,7,2), (10,8,4), (10,9,2), (10,10,1);
