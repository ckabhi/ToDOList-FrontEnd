import React, { Component } from 'react';
import { connect } from 'react-redux';


function mapStateToProps(store) {
  return {
    activeUser: store.activeUser
  }
}

class Sidebar extends Component {

  render() {

    return (
      <div id="fixed-sidebar-left" className="fixed-sidebar left">
          <a href="#" className="side-menu-open js-sidebar-open">
            <svg
             className="olymp-menu-icon"
             data-toggle="tooltip"
             data-placement="right"
             data-original-title="Open menu"
            >
             <use xlinkHref="wp-content/themes/olympus/images/icons.svg#olymp-menu-icon" />
            </svg>

            <svg
             className="olymp-close-icon"
             data-toggle="tooltip"
             data-placement="right"
             data-original-title="Close menu"
            >
             <use xlinkHref="wp-content/themes/olympus/images/icons.svg#olymp-close-icon" />
            </svg>

          </a>
          <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
               <div className="mCustomScrollbar" data-mcs-theme="dark">
                  <ul className="left-menu">
                     <li>
                        <a href="activity/index.html">
                           <span data-toggle="tooltip" data-placement="right" data-original-title="Members Newsfeed" >
                             <svg
                               className="left-menu-icon"
                               version="1.1"
                               id="Members_Newsfeed_Icon"
                               xmlns="http://www.w3.org/2000/svg"
                               x="0px"
                               y="0px"
                               viewBox="0 0 24 24"
                               enable-background="new 0 0 24 24"

                             >
                             <g>
                               <g>
                                 <path
                                   fill="#9A9FBF"
                                   d="M14,12H6v2h8V12z M6,18h8v-2H6V18z M16,12v6h2v-6H16z M20,2H4C2.896,2,2,2.896,2,4v6h18v10H4v-4H2v4 c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V4C22,2.896,21.104,2,20,2z M20,8H4V4h16V8z M4,12H2v2h2V12z M7,5H5v2h2V5z M10,5H8v2 h2V5z M13,5h-2v2h2V5z"
                                 />
                               </g>
                             </g>
                             </svg>
                           </span>
                        </a>
                     </li>
                     <li>
                        <a href="members/crumina/index.html">
                           <span data-toggle="tooltip" data-placement="right" data-original-title="Activity" >
                             <svg
                               className="left-menu-icon"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 24 24"
                              >
                               <path
                                 d="M7 18.001V16h6v2.001H7zM7 12h10v2H7v-2zm10 6.001V22H3V4c0-1.104.896-2 2-2h14c1.104 0 2 .896 2 2v6H5V20.001h10V16h6v2.001h-4zM19 8V4H5v4h14zM8 7H6V5h2v2zm3 0H9V5h2v2zm3 0h-2V5h2v2zm5 5h2v2h-2v-2z"
                               />
                              </svg>

                           </span>
                        </a>
                     </li>
                  </ul>
               </div>
          </div>
      </div>
              
    )
  }
}

export default connect(mapStateToProps)(Sidebar);
