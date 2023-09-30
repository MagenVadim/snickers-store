

const thumb_Nail = document.querySelectorAll('.img-preview');
const parent_Thumbnail = document.querySelector('.preview');
const child_Preview = parent_Thumbnail.childNodes;
let main_image = document.querySelector('.main-image');
const inside_image = document.querySelector('.inside-main-image'); // variable for working with imaging that appears close-up against a shaded background.
const basket_item_list = document.querySelector(".basket-item-list") // The parent node to which we will add the Template Clone
const counter = document.querySelector('.counter'); // Element with an icon on the Navigation bar with the number of selected positions.

const math_button = document.querySelector('.plus-minus');

const button_minus = document.querySelector('#button-minus');
const image_minus = document.querySelector('#image-minus');

const button_plus = document.querySelector('#button-plus');
const result = document.querySelector('.result');
let count = 1;
let ser_numb = 1;

let new_item = {};
let collect_cart ={};
let id_item_collect_cart;
let total_sum_cart=0;

const basket = document.querySelector('.basket');
const cart_parent = document.querySelector('.cart-parent'); // variable for working with the modal window "Cart"

const popup_parent = document.querySelector('.popup_parent');
const empty_cart = document.querySelector('.empty-cart');
const cart_description = document.querySelector('.cart-description');


let header_name_text_content = document.querySelector('.header').textContent;

let str_price = document.querySelector('.price').textContent;
let price = str_price.replace((/[^\d+\.\d+]/g), '');
let price_numb = Number(price);

const add_to_cart = document.querySelector('.add-to-cart');
let count_items_in_cart = [];

const icon_close = document.querySelector('.icon-close');

const arrow_previous= document.querySelector('.icon-arrow.previous');
const arrow_next= document.querySelector('.icon-arrow.next');

const men_list = document.querySelector('#men');
const women_list = document.querySelector('#women');
const products = document.querySelector('#products');

const list_items = document.querySelector('.list-items');
const list_parent = document.querySelector('.list-parent');
const ul_List = document.querySelector(".list-items");

const checkout_button = document.querySelector(".checkout-button")

const main = document.querySelector(".main");
const home = document.querySelector(".home");
const left_side_bar = document.querySelector('.left-side-bar');

const start_home = document.querySelector('#start-home');
const back_arrow_shipping = document.querySelector('.back-arrow-shipping');
const close_checkout_form = document.querySelector('#close-first-step');
const close_shipping_form = document.querySelector('#close-second-step');

const price_range = document.querySelector('.price-range-wrapper');
const button_price_filter = document.querySelector('.price-filter');


let json_catalog_number = "2023-999";

let busket_collection = {
    "New Balance": ["2023-999", "2023-998", "2023-997", "2023-996", "2023-995"],
    "Puma": ["2023-123", "2023-124", "2023-125"],
    "Adidas":["2023-555", "2023-556"],
    "Asics":["2023-888"],
};



async function generateData(){
    let collection_details = await fetch("/data.json").then((response) => response.json());
    collection_details = JSON.stringify(collection_details);
    collection_details = JSON.parse(collection_details);

    const container_presentation = document.querySelector('.presentation'); // The container to attach the cloned TEMPLATE to 
           
    // the main function that builds images of Snickers Items on the Home Page.
    function main_page(collection_details){
        for (firm in busket_collection){
            const temp = document.getElementsByTagName("template")[2];
            const clone = temp.content.cloneNode(true);
            const snickers_container = clone.querySelector(".snickers-container");
            const firm_header = clone.querySelector(".firm-header");   
            firm_header.innerText = firm;
    
            for (tag in collection_details){
                if(collection_details[tag].firm===firm){
                    var slick_slide_container = clone.querySelector(".slick-slide-container"); 
    
                    const slick_slide = document.createElement("div");
                    slick_slide.className="slick-slide";
                    slick_slide.id=tag;
                    slick_slide_container.appendChild(slick_slide);
        
                    const slick_image = document.createElement("img");
                    slick_image.className="image-present";
                    slick_image.src=`images/${tag}-image-product-1.jpg`;
                    slick_slide.appendChild(slick_image);
        
                    const item_name = document.createElement("p");
                    item_name.className="item-name";                
                    item_name.textContent=collection_details[tag].model;
                    slick_slide.appendChild(item_name);
    
                    const sex = document.createElement("p");
                    sex.className="sex-name";
                    sex.textContent="sex: ";
    
                    const sex_context = document.createElement("span");                
                    sex_context.textContent=`${collection_details[tag].sex}`;
                    if(collection_details[tag].sex=="men"){
                        sex_context.className="sex-context men";
                    };
                    if(collection_details[tag].sex=="women"){
                        sex_context.className="sex-context women";
                    };
                    sex.appendChild(sex_context);
                    slick_slide.appendChild(sex);
    
                    const style = document.createElement("p");
                    style.className="style-name";
                    style.textContent=`style: ${collection_details[tag].style}`;
                    slick_slide.appendChild(style);
    
                    const item_price = document.createElement("p");
                    item_price.className="item-price";
                    item_price.textContent=collection_details[tag].new_price;
                    slick_slide.appendChild(item_price);
    
                    if(collection_details[tag].collection==='new'){
                        const new_icon = document.createElement("img");
                        new_icon.className="new-icon";
                        new_icon.src='images/new-icon.jpg';
                        slick_slide.appendChild(new_icon);
                    }               
                }                
            }
            container_presentation.appendChild(snickers_container);           
        }
        
        let a = document.querySelectorAll(".slick-slide");
        return a;
    }
    
    main_page(collection_details) // call the function to draw the Snickers Items on the Home page.
    
    // ---------------------------------------SORTING-------------------------------------------------------------
    
    const dropdown_button_sorted_by_price_low_high = document.querySelector('#by_price_low_high');
    const dropdown_button_sorted_by_price_high_low = document.querySelector('#by_price_high_low');
    
    
    function presentation_by_sorting(collection_details){
        const temp = document.getElementsByTagName("template")[2];
        const clone = temp.content.cloneNode(true);
        const snickers_container = clone.querySelector(".snickers-container");
        var header_block = clone.querySelector(".header-dropdown");
        header_block.innerHTML='';
    
        for (tag in collection_details){        
            var slick_slide_container = clone.querySelector(".slick-slide-container");         
    
            const slick_slide = document.createElement("div");
            slick_slide.className="slick-slide";
            slick_slide.id=tag;
            slick_slide_container.appendChild(slick_slide);
    
            const slick_image = document.createElement("img");
            slick_image.className="image-present";
            slick_image.src=`images/${tag}-image-product-1.jpg`;
            slick_slide.appendChild(slick_image);
    
            const item_name = document.createElement("p");
            item_name.className="item-name";                
            item_name.textContent=collection_details[tag].model;
            slick_slide.appendChild(item_name);
    
            const sex = document.createElement("p");
            sex.className="sex-name";
            sex.textContent="sex: ";
    
            const sex_context = document.createElement("span");                
            sex_context.textContent=`${collection_details[tag].sex}`;
            if(collection_details[tag].sex=="men"){
                sex_context.className="sex-context men";
            };
            if(collection_details[tag].sex=="women"){
                sex_context.className="sex-context women";
            };
            sex.appendChild(sex_context);
            slick_slide.appendChild(sex);
    
            const style = document.createElement("p");
            style.className="style-name";
            style.textContent=`style: ${collection_details[tag].style}`;
            slick_slide.appendChild(style);
    
            const item_price = document.createElement("p");
            item_price.className="item-price";
            item_price.textContent=collection_details[tag].new_price;
            slick_slide.appendChild(item_price);
    
            if(collection_details[tag].collection==='new'){
                const new_icon = document.createElement("img");
                new_icon.className="new-icon";
                new_icon.src='images/new-icon.jpg';
                slick_slide.appendChild(new_icon);
            }                                
        }
        container_presentation.appendChild(snickers_container); 
    }
    
    //create an array consisting of objects (ID - price)
    let priceMap = [];
    for (key in collection_details){
        let a = {};
        a.id = key;
        a.price = collection_details[key].new_price
        priceMap.push(a)
    }
    
    dropdown_button_sorted_by_price_low_high.addEventListener('click', ()=>{
        //sort the array in ascending order of price
        priceMap.sort((a, b) => a.price - b.price)
        new_collection_details_by_price={};
        priceMap.forEach((pair)=>{
            new_collection_details_by_price[pair.id]=collection_details[pair.id];    
        })
        container_presentation.innerHTML='';
        presentation_by_sorting(new_collection_details_by_price);
    })
    
    dropdown_button_sorted_by_price_high_low.addEventListener('click', ()=>{
        //sort the array in discending order of price
        priceMap.sort((a, b) => b.price - a.price)
        new_collection_details_by_price={};
        priceMap.forEach((pair)=>{
            new_collection_details_by_price[pair.id]=collection_details[pair.id];    
        })
        container_presentation.innerHTML='';
        presentation_by_sorting(new_collection_details_by_price);
    })
    
    
    // -----------------------------CHECKBOXES-------------------------------------------------------------------------
    const checkboxes_array = document.querySelectorAll('.checkbox-button');
    const checkbox_all = document.querySelector('#sort-0000');

    // event handler for the "check all" checkbox
    checkbox_all.addEventListener('click', () =>{
        let status_checkbox_all = checkbox_all.checked;
        if(status_checkbox_all===true){
            checkboxes_array.forEach((buttonCheckbox)=>{       
                if(buttonCheckbox.checked===false){
                    buttonCheckbox.checked=true;
                };
            })  
        }
        if(status_checkbox_all===false){
            checkboxes_array.forEach((buttonCheckbox)=>{       
                if(buttonCheckbox.checked===true){
                    buttonCheckbox.checked=false;
                };
            })  
        }

    })
    
    
    // function for compiling an array of Catalog Numbers of all Snickers Items corresponding to the Input Condition of the selected Checkbox
    function checkbox_sex(income_sex){
        let new_collection_details = {};
        for (key in collection_details){
            if(income_sex==collection_details[key].sex){  
                container_presentation.innerHTML='';          
                new_collection_details[key]=collection_details[key];
            } 
        }  
    
        let b = main_page(new_collection_details); // array containing all icons of all Snickers Items of the Home page.
        move_to_detailes(b); 
        
        return new_collection_details;    
    }
    
    // the function checks the state of all checkboxes, and if:
    // - none of them is checked, then the function returns the page state to default,
    // - at the same time the checkboxes "man" and "woman" are checked, then the function returns the page state to default,
    
    function checkbox_status(){
        let ch_bx_true = 0;
        let ch_box_values_list=[];    
        let array_key_styles = [];
        let new_collect = collection_details;
        let new_collection_details = {};
    
        checkboxes_array.forEach((buttonCheckbox)=>{       
            if(buttonCheckbox.checked===true){
                ch_bx_true +=1;
                ch_box_values_list.push(buttonCheckbox.value) // the function adds the values of checked checkboxes to the array.  
            };       
        })        
       
        // firstly, check if one of conditions  is selected ('men'/'women'), and add to new array ("new_collect") all Snickers items to match to this criterion.
        if(ch_box_values_list.length>0){
            if(ch_box_values_list.includes('men') || ch_box_values_list.includes('women')){
                if (ch_box_values_list.includes('men') && ch_box_values_list.includes('women') && ch_box_values_list.length>2) new_collect=collection_details;
                else {
                    ch_box_values_list.forEach((sex)=>{
                        if(sex=='men') new_collect = checkbox_sex('men');
                        if(sex=='women') new_collect = checkbox_sex('women');
                    })
                }
            }
    
        if(ch_box_values_list.includes('running') || ch_box_values_list.includes('basket') || ch_box_values_list.includes('tennis')) {
            for (key in new_collect){
                let item_style = collection_details[key].style;            
    
                ch_box_values_list.forEach((val)=>{                    
                    // add in "array_key_styles" the each "style value" if they checked, for passing in "main_page()" function
                    if(val==item_style){
                    array_key_styles.push(key);
                    } 
                })          
            }
    
            array_key_styles.forEach((key)=>{            
                new_collection_details[key]=collection_details[key];            
            })
    
            container_presentation.innerHTML='';        
            main_page(new_collection_details);
        }
    
        
        if(ch_box_values_list.includes('latest')){
    
            // if one or more of the checkbox styles (running/basket/tennis) is checked 
            if(Object.keys(new_collection_details).length>0){
    
                array_key_styles=[];
                for (key in new_collection_details){
                    let collection_name = new_collection_details[key].collection; 
                    if(collection_name=='new')array_key_styles.push(key);               
                }
    
                new_collection_details={};
                array_key_styles.forEach((key)=>{            
                    new_collection_details[key]=collection_details[key];            
                })
                container_presentation.innerHTML='';
                main_page(new_collection_details);
            }
    
            // (in other cases (when male/female gender checkbox is selected) or nothing is selected)
            else {
                for (key in new_collect){
                    let collection_name = new_collect[key].collection;                
                    if(collection_name=='new')array_key_styles.push(key);      
                }
                array_key_styles.forEach((key)=>{            
                    new_collection_details[key]=collection_details[key];            
                })
                container_presentation.innerHTML='';
                main_page(new_collection_details);
            }        
        }
    }
    
    
        // condition when both checkbockes are checked ('men'/'women')
        if (ch_bx_true==0 || (ch_box_values_list.includes('men') && ch_box_values_list.includes('women') && ch_box_values_list.length==2) ) {
            container_presentation.innerHTML='';
            main_page(collection_details);
        }
    }
    
    // in an array of all checkbox elements, find the checkbox on which the click was made and call the function with this value.
    checkboxes_array.forEach((buttonCheckbox)=>{    
        buttonCheckbox.addEventListener('click', ()=>{
            checkbox_status();  
        })
    })
    
    
    // function to reset all previously selected Checkboxes
    function disable_all_checkboxes(){
        checkboxes_array.forEach((buttonStatus)=>{
            if(buttonStatus.checked){
                container_presentation.innerHTML='';
                buttonStatus.checked=false;
            }
        })
    }
    
    
    // ------------------------------------------------------------------------------------------------------
    
    
    // a function for processing a JSON variable with a collection of Snickers Items and adding them to the "Dropdown list" (Nav-bar) by cloning the "template"
    function get_catalog_firm_name(busket_collection){
        for (firm in busket_collection){
            const temp = document.getElementsByTagName("template")[1];
            const clone = temp.content.cloneNode(true);
            const nextLi = clone.querySelector(".firm-name");
            console.log("firm: " + firm);
            nextLi.innerText=firm;        
            ul_List.appendChild(clone);
        }    
    } 
    get_catalog_firm_name(busket_collection);
    
    
    men_list.addEventListener('click', ()=>{
        container_presentation.innerHTML='';
        checkbox_sex('men');
    })

    women_list.addEventListener('click', ()=>{
        container_presentation.innerHTML='';
        checkbox_sex('women');
    })


    // list of names of Snickers Items - when "clicking" on one of them, we get the "Catalog number" of the corresponding position, which we pass to the called function.
    products.addEventListener('click', ()=>{
        list_parent.classList.toggle("hidden"); // раскрываем список
    
        ul_List.addEventListener('mouseover', ()=>{
            if(typeof json_catalog_number==="string"){
                set_inside_image(json_catalog_number);
                set_image(json_catalog_number);
                set_details(json_catalog_number);
            }    
        })
    
        ul_List.addEventListener('click', (e)=>{
            let key_name=e.target.closest('.firm-name').textContent;
            json_catalog_number = busket_collection[key_name];

            if(list_parent.className=="list-parent"){
                console.log(list_parent.className);
                list_parent.classList.toggle("hidden");
            }
            
            container_presentation.innerHTML='';           
            let new_collection_details = {};
            for (key in collection_details){
                if (collection_details[key].firm===key_name){                    
                    new_collection_details[key]=collection_details[key];
                }                            
            }        
            main_page(new_collection_details);      
        })
    })
    
    
    //  display all the details (model-description-price new-discount-price old) for the selected Item
    function set_details(json_catalog_number){
        document.querySelector('.header').innerText = collection_details[json_catalog_number].model;
        document.querySelector('.description-company').innerText = collection_details[json_catalog_number].description;
        document.querySelector('.price').innerText = collection_details[json_catalog_number].new_price;
        str_price = document.querySelector('.price').innerText;
        price = str_price.replace((/[^\d+\.\d+]/g), '');
        price_numb = Number(price);
        document.querySelector('.discount').innerText = collection_details[json_catalog_number].discount;
        document.querySelector('.old-price').innerText = collection_details[json_catalog_number].old_price;
    }
    
    // set the image on the "Scrollbar", corresponding to the passed "Catalog number"
    function set_image(json_catalog_number){
        thumb_Nail.forEach((nail)=>{
            nail.getAttributeNode("src").nodeValue = `images/${json_catalog_number}-image-product-${ser_numb}-thumbnail.jpg`        
            ser_numb++ 
        }) 
        ser_numb=1;   
    }
    // set the picture opened by "Close-up", corresponding to the passed "Catalog number"
    function set_inside_image(json_catalog_number){
        main_image.getAttributeNode("src").nodeValue = `images/${json_catalog_number}-image-product-1.jpg`
        inside_image.getAttributeNode("src").nodeValue = `images/${json_catalog_number}-image-product-1.jpg`    
    }
    
    set_inside_image(json_catalog_number);
    set_image(json_catalog_number);
    
    
    
    thumb_Nail.forEach((nail)=>{
        nail.addEventListener('click', ()=>{
            let str = nail.id;
            let id = str.replace((/.*[^\d]/g), ''); // extract Catalog number from ID
            // let catalog_number = str.replace((/-\w+-\d$/g), '');
            console.log("id: " + id)
            // console.log("catalog_number: " + catalog_number)
    
            let b = `images/${json_catalog_number}-image-product-${id}.jpg`; // create a variable in which we specify the name-source for the "Main picture" with the required Catalog number
            console.log(b);
            main_image.getAttributeNode("src").nodeValue = b; // replace in the DOM document, change the resource to to the name with the actual "Main picture"
            inside_image.getAttributeNode("src").nodeValue = b;
    
            let old_image_selected = document.querySelector('.img-preview.selected');
            old_image_selected.classList.remove("selected");
            nail.classList.add("selected");
        })
    })
    
    math_button.addEventListener('click', (e)=>{
        if (e.target.id ==="button-minus" || e.target.id ==="image-minus"){        
            count--; 
            if (count<1) count=1;     
        };
        if (e.target.id ==="button-plus" || e.target.id ==="image-plus") {
            count++; 
        }
        result.textContent=count;
    })
    
    
    add_to_cart.addEventListener('click', () => {      
        // save the parameters of the added product in the "Cart" in the variable "new_item"
        new_item = {
            cat_number: json_catalog_number,
            item_name: collection_details[json_catalog_number].model,
            item_count: count,
            item_price: price_numb,
            sum: (price_numb * count),
        } 
    
        id_item_collect_cart = generateUUID() // set an ID for each item in the "Cart";
    
        collect_cart[id_item_collect_cart]=new_item; // save in the Array Object, each Snickers Item from the "Cart" with the same ID of each element;
    
        item_formula(id_item_collect_cart); // call a function to calculate the Amount for each Item depending on the quantity and clone the corresponding line from the Template.
        icon_item_number_cart(); // each time after clicking "Add to cart" the length of the array with the list of elements "Number of items in the Cart" is updated and the actual number is displayed on the icon in the Navigation Bar.
    })
    
    // update the length of the array with the list of elements "Number of items in the Cart" and update the number on the icon in the Navigation bar.
    function icon_item_number_cart(){
        count_items_in_cart = document.querySelectorAll('.delete-icon');
        document.querySelector(".number").textContent = count_items_in_cart.length; 
        
        console.log("count_items_in_cart: " + count_items_in_cart.length);
        // if the array length = 0, then we display the inscription "Your cart is empty" on the screen and hide the "Checkout" button.
        if(count_items_in_cart.length===0){        
            empty_cart.classList.toggle("hidden");
            cart_description.classList.toggle("hidden"); 
            counter.style.display="none";    
        }
    }
    
    
    // function for calculating the cost of the "Added items" and displaying it in the "Cart"
    function item_formula(id_item){    
          
        const cart_description = document.querySelector('#cart-description');
        const status_cart_description = cart_description.className;
        clone_node_to_basket(id_item);
        
        if (count>0 && status_cart_description==="cart-description hidden"){
            empty_cart.classList.toggle("hidden");
            cart_description.classList.toggle("hidden");
            counter.style.display="flex";        
        }
        if(count===0){
            empty_cart.classList.toggle("hidden");
            cart_description.classList.toggle("hidden"); 
            counter.style.display="none";    
        }
    }
    
    
    function clone_node_to_basket(id_item){  
        const temp = document.getElementsByTagName("template")[0]; // create a variable with the selector of the appropriate template-Template. 
        const clone = temp.content.cloneNode(true); // clones the entire Template structure
        // 1st element - String (Price-Quantity-Value)
        const formula = clone.querySelector('.detail-price');  // 1st of template elements-Template (Price-Quantity-Value)
        let total_sum = price_numb * count; let total_sum_fixed = total_sum.toFixed(2); // Calculation of the "Value" to be added to the 1st element
        formula.innerHTML = `<p class="detail-price">$${price} x ${count} <strong> $${total_sum_fixed}</strong></p>` // assign the found element of the Template the required value    
        // 2nd element - Picture
        const item_image_basket = clone.querySelector('.item-image');
        item_image_basket.getAttributeNode("src").nodeValue = `images/${json_catalog_number}-image-product-1-thumbnail.jpg`
        // 3rd item - ID item
        const container_id = clone.querySelector('.cart-containt-full');
        container_id.getAttributeNode("id").nodeValue = id_item;
    
        basket_item_list.appendChild(clone); // add to the existing structure, the updated "Clone" of the template. (The parent node in the Recycle Bin to which we will attach the Clone)
    }
    
    // Event Handler (Listen to Cart Button)
    basket.addEventListener('click', ()=>{  
        cart_parent.classList.toggle("hidden");
    
        // if in the Modal window "Cart", the child window is "hidden", then expand it.
        if(popup_parent.className == "popup_parent hidden"){
            popup_parent.classList.toggle("hidden")
        }
        count_items_in_cart = document.querySelectorAll('.delete-icon'); // each time after clicking the "Delete" icon, the array variable with the list of "Cart" elements is updated.
        delete_from_basket()
        total_sum_all_items() // calculate the value of all positions in the "Cart"
    })
    
    // hide the "Cart" Modal window if the "click" occurred outside of the modal window.
    cart_parent.addEventListener('click', (e)=>{
        const click = e.composedPath().includes(popup_parent);
        const click_shipping = e.composedPath().includes(checkout_form);
        console.log(e.target)
        if (!click && !click_shipping){
            cart_parent.classList.toggle("hidden");
        } 
        
    })
    
    // hide the "Products List" Modal window if the "click" happened outside of the modal window.
    list_parent.addEventListener('click', (e)=>{
        const click = e.composedPath().includes(list_items);
        if (!click) {
            console.log(list_parent.className);
            list_parent.classList.toggle("hidden");            
        }
    
    })


    const background_item_image = document.querySelector('.front-main-image');
    background_item_image.addEventListener('click', (e)=>{
        const frame_inside_image = document.querySelector('inside-main-image');

        const click = e.composedPath().includes(frame_inside_image);
        if (!click) {
            console.log("click");
            background_item_image.toggle("hidden");
        }
    
    })

    
    // function - event handler (listen to "Delete" button)
    function delete_from_basket(){    
        basket_item_list.addEventListener('click', (e)=>{
            if(e.target.className !="basket-icon-delete") return;
            const id_item_deleted = e.target.closest('.cart-containt-full').getAttributeNode("id").nodeValue;
            e.target.closest('.cart-containt-full').remove(); // удаляем из DOM
    
            icon_item_number_cart() // each time after clicking "Add to cart" the length of the array with the list of elements "Number of items in the Cart" is updated and the actual number is displayed on the icon in the Navigation Bar.      
            
            // iterate through all the elements in the Object variable and remove by key the value that corresponds to the one removed from the DOM
            for(key in collect_cart){             
                if(key==id_item_deleted){
                    delete collect_cart[key];                
                }
            }
            total_sum_all_items() // calculate the value of all positions in the "Cart"
        })   
    }
    
    main_image.addEventListener('click', ()=>{
        document.querySelector('.front-main-image').style.display ="flex";
    })
    
    icon_close.addEventListener('click', ()=>{
        document.querySelector('.front-main-image').style.display ="none";
    })
    
    arrow_next.addEventListener('click', ()=>{
        ser_numb++;
        if(ser_numb>4) ser_numb=1;
        let b = `images/${json_catalog_number}-image-product-${ser_numb}.jpg`;
        inside_image.getAttributeNode("src").nodeValue = b;
    })
    
    arrow_previous.addEventListener('click', ()=>{
        ser_numb--;
        if(ser_numb<1) ser_numb=4;
        let b = `images/${json_catalog_number}-image-product-${ser_numb}.jpg`;
        inside_image.getAttributeNode("src").nodeValue = b;
    })
    
    
    // function to generate UUID
    function generateUUID() {
        // Get the current time in milliseconds
        let d = new Date().getTime();
        // If performance is available, then add its value to the time
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now();
        }
        // Generate a UUID in the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
      }
    
      function total_sum_all_items(){
        total_sum_cart = 0;
        for (key in collect_cart){      
            total_sum_cart = total_sum_cart + collect_cart[key].sum;           
        }
        let string_total_sum_cart = total_sum_cart.toFixed(2);
        let dom_elem_total_sum = document.querySelector('.strong-total-sum')
        dom_elem_total_sum.innerText=`$${string_total_sum_cart}`;
      }
    
      const checkout_form = document.querySelector('.checkout-form');
      checkout_button.addEventListener('click', ()=>{
        checkout_form.classList.toggle("hidden");
        popup_parent.classList.toggle("hidden");
      })
    
    
    //   HOME PAGE
    
    var slick_container = document.querySelectorAll(".slick-slide");
    
    // +++ a function that listens to all elements of the Icons of all Commodity Items, and in case of clicking on one of them, opens the details of the selected item.
    function move_to_detailes(slick_container){
        slick_container.forEach((slick)=>{
            slick.addEventListener('click',(e)=>{
                const tag_item_number = e.target.closest('.slick-slide').id;
                json_catalog_number = tag_item_number;
                set_inside_image(tag_item_number);
                set_image(tag_item_number);
                set_details(tag_item_number);
                main.classList.toggle("hidden");
                home.classList.toggle("hidden");
                left_side_bar.style.display="none";
                left_side_bar.classList.toggle("hidden"); 
            })               
        })
    }
    move_to_detailes(slick_container);
    
    
    start_home.addEventListener('click', ()=>{
        container_presentation.innerHTML='';
        disable_all_checkboxes();  //******************************************************************************
        let b = main_page(collection_details);
        console.log(b);
    
        if (main.className=="main") {
            main.classList.toggle("hidden");
            home.classList.toggle("hidden"); 
            container_presentation.innerHTML='';
        
            let b = main_page(collection_details);
            move_to_detailes(b);
        }

    })
    
    //   NAVIGATION BUTTONS for "CHECKOUT" (inside "Cart")
    
    back_arrow_shipping.addEventListener('click', ()=>{
        checkout_form.classList.toggle("hidden"); // hide stage 2 (Shipping)
        popup_parent.classList.toggle("hidden"); // display stage 1 (nested pop-up window) Checkout
    })
    
    close_checkout_form.addEventListener('click', ()=>{
        popup_parent.classList.toggle("hidden"); // display stage 1 Сheckout for next displaying
        cart_parent.classList.toggle("hidden"); // hide modal window background
    })
    
    close_shipping_form.addEventListener('click', ()=>{
        checkout_form.classList.toggle("hidden"); // hide stage 2 (Shipping)
        popup_parent.classList.toggle("hidden"); // display stage 1 Checkout for the next opening
        cart_parent.classList.toggle("hidden"); // hide modal window background
    })
            
    // const header_dropdown = document.querySelector('image-arrow-dropdown');
    home.addEventListener('click', (e)=>{
        const header_arrow_dropdown = e.target.closest('.image-arrow-dropdown');
        const header_div = header_arrow_dropdown.parentNode;
        const grandParent = header_div.parentNode;
        const sibling_slide_container = grandParent.nextElementSibling;
        if (getComputedStyle(sibling_slide_container).display=='flex'){
            sibling_slide_container.style.display="none";
            e.target.getAttributeNode("src").nodeValue = "images/image-arrow-dropup.png";
        }
        else {
            sibling_slide_container.style.display="flex";
            e.target.getAttributeNode("src").nodeValue = "images/image-arrow-dropdown.png";
        }
    })


    // Operations with "Collections" nav-bar sections.
    const collections = document.querySelector('#collections');
    const collection_list = document.querySelector('.collection-list');
    const collection_list_items = document.querySelector('.collection-list-items');

    collections.addEventListener('click',()=>{        
        let list_name_collection =[]
        for (tag in collection_details){
            let next_name_collection = collection_details[tag].collection;
            list_name_collection.push(next_name_collection)            
        }
        console.log(list_name_collection);
        collection_list.classList.toggle("hidden");
    })   

    // hide the "Collections" Modal window if the "click" occurred outside of the modal window.
    collection_list.addEventListener('click', (e)=>{
        const click = e.composedPath().includes(collection_list_items);
        if (!click){
            collection_list.classList.toggle("hidden");
        }         
    })
   


    //  ************  PRICE-RANGE-FILTER   *********************
    const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
    let priceGap = 50;

    priceInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
            
            if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                if(e.target.className === "input-min"){
                    rangeInput[0].value = minPrice;
                    range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                }else{
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

            if((maxVal - minVal) < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal - priceGap
                }else{
                    rangeInput[1].value = minVal + priceGap;
                }
            }else{
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });

}


generateData()

